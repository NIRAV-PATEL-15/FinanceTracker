const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});

// const WelcomeMail = async (Email, UserName) => {
//   const mailOptions = {
//     from: "finance-you@gmail.com",
//     to: `${Email}`,
//     subject: `Welcome to MyExpense`,
//     html: `
//     <html>
//     <body style="font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f7f7f7; padding: 20px;">
//       <table style="width: 100%; max-width: 720px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);">
//         <tr>
//       <td style="padding: 20px 0; text-align: center;">
//         <img class="img-fluid" src="" alt="Winterstore Logo" style="display: block; margin: 0 auto;max-width:50%;">
//       </td>
//     </tr>
//     <tr>
//       <td style="padding: 0 20px 20px 20px;">
//         <h4 style="font-weight: bold; font-size: 24px; margin-bottom: 10px;">Dear <b>${UserName}</b>,</h4>
//         <p style="margin-bottom: 20px;">Welcome to Winterstore! We're thrilled to have you as a member of our community and we can't wait for you to start shopping with us.</p>
//         <p style="margin-bottom: 20px;">As a new member, you'll have access to exclusive deals and promotions, and be the first to know about our newest products.</p>
//         <a href="https://winterstore-shopping.web.app/">     <p style="margin-bottom: 20px;">WinterStore - clickHere </p></a>
//         <p style="margin-bottom: 20px;">Thank you for joining us, and we hope to see you soon!</p>
//        <p style="margin-top: 10px; margin-bottom: 0; font-size: 16px; font-weight: bold; color: #0072C6; text-transform: uppercase;">Best regards,</p>
//   <p style="margin-top: 0; margin-bottom: 0; font-size: 18px; font-weight: bold;">Nirav Patel</p>
//   <p style="margin-top: 0; font-size: 14px; color: #777;">Winterstore Customer Service</p>
//           </td>
//         </tr>
//       </table>
//     </body>
//   </html>

// `,
//   };
//   // send mail with defined transport object
//   const { message: response } = await transporter.sendMail(mailOptions);

//   console.log(`Welcome Email sent`);
// };
// const ForgetPassMail = async (Email, UserName) => {
//   const otp = generateOTP();
//   const mailOptions = {
//     from: "shop.winterstore@gmail.com",
//     to: `${Email}`,
//     subject: `Reset Your Winterstore Account Password`,
//     html: `
//     <html>
//   <body style="font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f7f7f7; padding: 20px;">
//     <table style="width: 100%; max-width: 720px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);">
//       <tr>
//         <td style="padding: 20px 0; text-align: center;">
//           <img class="img-fluid" src="https://raw.githubusercontent.com/NIRAV-PATEL-15/NIRAV-PATEL-15/main/logo13.png" alt="Winterstore Logo" style="display: block; margin: 0 auto;max-width:50%;">
//         </td>
//       </tr>
//       <tr>
//         <td style="padding: 0 20px 20px 20px;">
//           <h4 style="font-weight: bold; font-size: 24px; margin-bottom: 10px;">Dear ${UserName},</h4>
//           <p style="margin-bottom: 20px;">We received a request to reset your password on WinterStore. To reset your password, please enter the following verification code:</p>
//           <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
//             <tr>
//               <td style="border: 1px solid #ddd; padding: 10px;">Verification Code:</td>
//               <td style="border: 1px solid #ddd; padding: 10px;">${otp}</td>
//             </tr>
//           </table>
//           <p style="margin-bottom: 20px;">Please enter this code on the password reset page to verify your account and create a new password.</p>
//           <p style="margin-bottom: 20px;">If you did not request a password reset, please ignore this message. Note that this code will expire in 5 minutes for security reasons.</p>
//           <p style="margin-top: 10px; margin-bottom: 0; font-size: 16px; font-weight: bold; color: #0072C6; text-transform: uppercase;">Best regards,</p>
//           <p style="margin-top: 0; margin-bottom: 0; font-size: 18px; font-weight: bold;">WinterStore Support Team</p>
//         </td>
//       </tr>
//     </table>
//   </body>
// </html>`,
//   };
//   // send mail with defined transport object
//   const { message: response } = await transporter.sendMail(mailOptions);

//   console.log(`Welcome Email sent`);
// };
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  if (username == " " || email == " " || password == " ") {
    res.status(400).send();
  }
  try {
    // Check if user with same email already exists
    const existingUser = await User.findOne({ userName: username });
    if (existingUser) {
      return res.status(400).send();
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      userName:username,
      email: email,
      password: hashedPassword,
    });

    // Save user to database
    await user.save();
    res.status(201).json(user);
    // await WelcomeMail(email, fname + " " + lname);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user and return JWT token
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ userName: username }).select("+Password");
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = {
      id: user._id,
      email: user.Email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// // get all users
// exports.allUser = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // console.log(updatedUser)
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateUserBySelf = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // console.log(updatedUser)
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// // Delete a user by ID
// exports.deleteUser = async (req, res) => {
//   try {
//     const deleteduser = await User.findByIdAndUpdate(
//       req.params.id,
//       { IsActive: false },
//       { new: true }
//     );
//     res.json(deleteduser);
//     // console.log(deleteduser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// Get current user profile
exports.getMe = async (req, res) => {
  const { id } = req.params;
  try {
    // Get user from database
    const user = await User.findById(id);
    if (!user?.id) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// exports.OtpSender = async (req, res) => {
//   const { email } = req.params;
//   const data = await User.findOne({ Email: email });
//   await ForgetPassMail(email, data.FirstName);
// };
// // Forget Pass
// exports.Forget = async (req, res) => {};

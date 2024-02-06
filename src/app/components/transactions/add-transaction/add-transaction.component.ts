import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {

  signUpForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      city: new FormControl("", [Validators.required, Validators.minLength(5)]),
      region: new FormControl("", [Validators.required])
    })
  });

  updateProfile() {
    this.signUpForm.patchValue({
      firstName: "Jane",
      lastName: "Smith",
      address: {
        street: "123 1st Street"
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss'],
})
export class RecentTransactionsComponent {
  transactions: any = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Williams',
    },
    {
      id: 6,
      firstName: 'Sarah',
      lastName: 'Jones',
    },
    {
      id: 7,
      firstName: 'Christopher',
      lastName: 'Davis',
    },
    {
      id: 8,
      firstName: 'Jessica',
      lastName: 'Miller',
    },
    {
      id: 9,
      firstName: 'Matthew',
      lastName: 'Wilson',
    },
    {
      id: 10,
      firstName: 'Jennifer',
      lastName: 'Moore',
    },
    {
      id: 11,
      firstName: 'Daniel',
      lastName: 'Taylor',
    },
    {
      id: 12,
      firstName: 'Lisa',
      lastName: 'Anderson',
    },
  ];
  showDetails(id: any) {
    let data = this.transactions.filter((item: any) => {
      if (item.id == id) {
        return item;
      }
    })[0];
    console.log(data);
    alert(`${data.id} is ${data.firstName} ${data.lastName} `);
  }
}

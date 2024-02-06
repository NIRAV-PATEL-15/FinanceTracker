import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
transactions : any = [
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Smith"
  },
  {
    "id": 3,
    "firstName": "Michael",
    "lastName": "Johnson"
  },
  {
    "id": 4,
    "firstName": "Emily",
    "lastName": "Brown"
  },
  {
    "id": 5,
    "firstName": "David",
    "lastName": "Williams"
  },
  {
    "id": 6,
    "firstName": "Sarah",
    "lastName": "Jones"
  },
  {
    "id": 7,
    "firstName": "Christopher",
    "lastName": "Davis"
  },
  {
    "id": 8,
    "firstName": "Jessica",
    "lastName": "Miller"
  },
  {
    "id": 9,
    "firstName": "Matthew",
    "lastName": "Wilson"
  },
  {
    "id": 10,
    "firstName": "Jennifer",
    "lastName": "Moore"
  },
  {
    "id": 11,
    "firstName": "Daniel",
    "lastName": "Taylor"
  },
  {
    "id": 12,
    "firstName": "Lisa",
    "lastName": "Anderson"
  },
  {
    "id": 13,
    "firstName": "James",
    "lastName": "Thomas"
  },
  {
    "id": 14,
    "firstName": "Mary",
    "lastName": "Jackson"
  },
  {
    "id": 15,
    "firstName": "Robert",
    "lastName": "White"
  },
  {
    "id": 16,
    "firstName": "Amanda",
    "lastName": "Harris"
  },
  {
    "id": 17,
    "firstName": "William",
    "lastName": "Martin"
  },
  {
    "id": 18,
    "firstName": "Ashley",
    "lastName": "Thompson"
  },
  {
    "id": 19,
    "firstName": "Brian",
    "lastName": "Garcia"
  },
  {
    "id": 20,
    "firstName": "Michelle",
    "lastName": "Robinson"
  }
]
showDetails(id:any){
  let data = this.transactions.filter((item:any)=>{
    if (item.id == id ){
      return item
    }
  })[0]
  console.log(data)
  alert(`${data.id} is ${data.firstName} ${data.lastName} `)
}
ngOnInit(): void {
  this.dtOptions = {
    pagingType: "full_numbers",
    pageLength: 10,
searching:true    
  };

}}

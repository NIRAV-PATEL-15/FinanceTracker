import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cardsData = [
    {name:"income",value:"$43,300",title:"Income"},
    {name:"expense",value:"$38,060",title:"Expense"},
    {name:"balance",value:"$5,240",title:"Balance"},
    {name:"transaction",value:"12,298",title:"transactions"},
  ]
}

import { Component, Input } from '@angular/core';
interface CardData{
  name:string,
  value:string,
  title:string
}
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() cardValue!:CardData ;
  
}

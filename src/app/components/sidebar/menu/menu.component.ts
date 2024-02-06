import { Component } from '@angular/core';
import { menuItems } from './menuitems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuData = menuItems;
  isLoggedin = true;
}

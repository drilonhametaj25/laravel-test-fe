import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];
  menuItems: any[] = [];
  displayAllItems: boolean = false;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/private'],
          },
          {
            label: 'Breweries',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/private/breweries'],
          },
        ],
      },
    ];
  }

  changeItems() {
    this.displayAllItems = !this.displayAllItems;
    if (this.displayAllItems) {
      this.menuItems = this.menuItems.concat(this.model);
    } else {
      this.menuItems.splice(
        this.menuItems.length - this.model.length,
        this.model.length
      );
    }
  }
}

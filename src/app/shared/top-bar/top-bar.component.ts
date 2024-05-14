import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent {
  @Input() toogleMenu!: any;
  @Output() logoutEvent = new EventEmitter<boolean>();

  searchValue: string | undefined;

  ngOnInit() {
    console.log(this.toogleMenu)
  }

  onLogout(){
    this.logoutEvent.emit(true);
  }
}

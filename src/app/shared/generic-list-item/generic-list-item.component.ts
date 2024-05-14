import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list-item',
  templateUrl: './generic-list-item.component.html',
  styleUrls: ['./generic-list-item.component.scss'],
})
export class GenericListItemComponent {
  @Input() list!: any;
  @Input() iconAction?: any;
}

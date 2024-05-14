import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SidenavMenuItem } from '../sidenav-menu-item';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '@app/app/constants';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class NestedMenuComponent implements OnInit {
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded;
  @Input() public item: SidenavMenuItem | null = null;
  @Input() public depth: number = 0;
  @Input() public small: boolean = true;
  @Input() public site: Site | null = null;
  @Output() afterItemClicked = new EventEmitter();

  constructor(public router: Router) {
    this.ariaExpanded = this.expanded;

    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: SidenavMenuItem) {
    if (!item?.children?.length) {
      this.router.navigate([item.route]);
      this.afterItemClicked.emit();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  newLink(item: SidenavMenuItem){
    window.open(item.link, "_blank")
  }
  ngOnInit() {}
}

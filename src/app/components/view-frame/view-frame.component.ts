import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-frame',
  templateUrl: './view-frame.component.html',
  styleUrls: ['./view-frame.component.scss'],
})
export class ViewFrameComponent implements OnInit {
  @Input() heading?: string;
  @Input() subTitle?: string;
  @Input() newButtonText: string = 'Nuovo';
  @Input() newButtonPath: string = '^.new';
  @Input() back: string = '^.index';
  @Input() disableBack: boolean = true;
  @Input() backParams: any = {};
  @Input() loading: boolean = true;
  @Input() enableNew: boolean = false;
  @Input() viewMode: 'edit' | "index" | 'create' = "index";
  @Input() disableSidebar = true
  @Input() actionButton: boolean = false;
  @Output() onActionButton = new EventEmitter<any>()

  windowWith: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWith = event.target.innerWidth;
  }

  constructor(public router: Router) { }

  ngOnInit(): void { }

  get isIndex() {
    return this.viewMode === 'index';
  }

  onActionButtonChange() {
    this.onActionButton.emit()
  }

}

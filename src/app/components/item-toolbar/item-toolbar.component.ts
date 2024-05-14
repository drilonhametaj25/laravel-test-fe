import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-toolbar',
  templateUrl: './item-toolbar.component.html',
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }

      ::ng-deep .html-title * {
        margin: 0 !important;
      }
    `,
  ],
})
export class ItemToolbarComponent implements OnInit {
  @Input() label?: string;
  @Input() rightText?: string;
  @Input() prefix?: string;
  @Input() isHtml?: boolean;
  @Input() onlyChildren?: boolean;
  @Input() enabledFields: string[] = ['duplicate', 'delete', 'edit'];
  @Output() saveClick: EventEmitter<any> = new EventEmitter();
  @Output() discardClick: EventEmitter<any> = new EventEmitter();
  @Output() editClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();
  @Output() duplicateClick: EventEmitter<any> = new EventEmitter();

  localEditMode: boolean = false;

  dinamoConfirmDeleteMessage = {
    title: 'Attenzione!',
    message: 'Sei sicuro di voler eliminare questo elemento?',
    noButton: 'No',
    yesButton: 'Si',
  };
  dinamoConfirmDuplicateMessage = {
    title: 'Attenzione!',
    message: 'Sei sicuro di voler duplicare questo elemento?',
    noButton: 'No',
    yesButton: 'Si',
  };

  constructor() {}

  ngOnInit(): void {}
}

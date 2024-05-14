import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackService } from '@app/app/services/snack.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  @ViewChild('dataTable') dataTable: any;
  @Input() rows: any[] = [];
  @Input() showActionButtons: boolean = false;
  @Input() apiService: any;
  @Input() headerHeight = 40;
  @Input() footerHeight = 50;
  @Input() rowHeight = 'auto';
  @Input() tableStyle = 'material';
  @Input() columnMode: any;
  @Input() cols: any[] = [];
  @Input() editLink = '';
  @Input() shadowClass: boolean = true;
  @Input() confirmDialog = {
    title: 'Delete Product',
    message: 'Are you sure you want to delete this product?',
    noButton: 'No',
    yesButton: 'Yes',
  };
  @Input() orderable: boolean = false;
  @Output() onDelete = new EventEmitter();
  @Input() detailTemplate!: TemplateRef<any>;
  // @Input() nameTemplate: TemplateRef<any>;

  // @ViewChild('nameSummaryCell')
  // nameSummaryCell: TemplateRef<any>;


  disableOrderButton: boolean = false;

  width = 150;

  toggleExpandRow(row: any) {
    this.dataTable.rowDetail.toggleExpandRow(row);
  }

  constructor(
    private snackService: SnackService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setClasses();
    if (this.orderable) this.width = 190;
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }

  setClasses() {
    return {
      material: this.tableStyle == 'material' ? true : false,
      bootstrap: this.tableStyle == 'bootstrap' ? true : false,
      'shadow-class': this.shadowClass,
    };
  }

  onSort(event: any) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        sort: event.column.prop,
        direction: event.newValue,
      },
    });
  }

  ngAfterViewInit() {
    if (this.route.snapshot.queryParams) {
      this.dataTable.sorts = [
        {
          prop: this.route.snapshot.queryParams['sort'],
          dir: this.route.snapshot.queryParams['direction'],
        },
      ];
    }
  }

  onOrderChange(row: any, direction: string) {
    //check current index of row in rows array and if it is the first or last row disable the button

    const i = this.rows.findIndex((p) => p._id === row._id);
    if (direction == 'up' && i != 0) {
      moveItemInArray(this.rows, i, i - 1);
    }

    if (direction == 'down' && i != this.rows.length - 1) {
      moveItemInArray(this.rows, i, i + 1);
    }
    this.rows = [...this.rows];

    //update all rows order
    this.rows.forEach((row, i) => {
      this.apiService
        .update(row._id, { order: i })
        .subscribe((_: any) => {}, console.error);
    });
    this.snackService.info('Product order updated successfully');
  }
}

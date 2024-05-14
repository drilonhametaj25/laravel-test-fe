import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TableColumn } from './TableColumn';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

const DEBOUNCE_TIME = 1000;

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  debounce: any = 0;
  @Input() keyword: string = '';
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() actions: string[] = [];
  @Input() loading = true;
  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[2];
  @Input() pageSize: number;
  @Input() totalRecords: number;

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() emitDuplicateAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitDeleteAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitEditAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPageChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }


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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map(
      (tableColumn: TableColumn) => tableColumn.name
    );
    if (this.actions.length) {
      this.displayedColumns = [...columnNames, 'Azioni'];
    } else {
      this.displayedColumns = columnNames;
    }
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
  }

  setTableDataSource(data: any) {
    // @ts-ignore
    this.tableDataSource = new MatTableDataSource<any>(data);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.tableDataSource.filter = filterValue.trim().toLowerCase();
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.onSearch.emit(filterValue);
    }, DEBOUNCE_TIME);
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    // @ts-ignore
    sortParameters.active = this.tableColumns.find(
      (column) => column.name === sortParameters.active
    ).dataKey;

    this.sort.emit(sortParameters);
  }
}

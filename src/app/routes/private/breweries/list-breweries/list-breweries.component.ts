import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { ApiResponseInterface } from '@app/app/interfaces/api-response';
import { DataView } from 'primeng/dataview';
import { ClientInterface } from '@app/app/interfaces/client.interface';
import { SnackService } from '@app/app/services/snack.service';
import { ConfirmationService } from 'primeng/api';
import { Page } from '@app/app/utils/page';
import { BrewieriesService } from '../breweries.service';

@Component({
  selector: 'app-list-breweries',
  templateUrl: './list-breweries.component.html',
  styleUrls: ['./list-breweries.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListBreweriesComponent implements OnInit, OnChanges {
  @Input() breweries: any;
  @Input() page!: Page;
  @Output() onChangePage = new EventEmitter<number>();

  layout: string = 'grid';

  mobile: boolean = false;

  sortOptions: any[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  dataSource: any[] = []
  displayedColumns = ['id','name', 'brewery_type', 'address_1','city','state_province','postal_code','country','longitude','latitude','phone','website_url','state','street']

  constructor(
    private breweriesService: BrewieriesService,
    private snackService: SnackService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnChanges(changes: SimpleChanges) {

    // if (changes['clients']) this.clients = changes['clients'].currentValue;
    // if (changes['page']) this.page = changes['page'].currentValue;
  }

  ngOnInit() {

  }

  onLazyLoad(event: any) {
    this.onChangePage.emit(event.first / this.page.size); //current page
  }

  changeLayout(event: any) {
    this.layout = event.layout;
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }
}

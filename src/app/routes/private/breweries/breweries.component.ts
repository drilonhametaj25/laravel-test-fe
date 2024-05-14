import { Component, OnInit } from '@angular/core';
import { Page } from '@app/app/utils/page';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { SnackService } from '@app/app/services/snack.service';
import { ApiResponseInterface } from '@app/app/interfaces/api-response';

import { ClientInterface } from '@app/app/interfaces/client.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { BrewieriesService } from './breweries.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss'],
})
export class BreweriesComponent implements OnInit {
  page = new Page();
  breweries = []

  ColumnMode = ColumnMode;
  columns = [
  ];
  loading = true;

  form = new FormGroup({
    search: new FormControl(''),
  });

  constructor(
    private breweriesService: BrewieriesService,
    private snackService: SnackService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 9;
  }

  ngOnInit() {
    this.loading = false;
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo: { offset: number }) {
    this.page.pageNumber = pageInfo.offset;
    this.breweriesService
      .list({length: this.page.size, start: this.page.offset}, this.page)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.page.totalElements = res.total || 0;
          this.page.totalPages = (res.total/this.page.size);
          this.breweries = res.data;
          this.snackService.info('Lista breweries');
        }
      });
  }

  onChangePage(pageNumber: number) {
    this.setPage({ offset: pageNumber });
  }


  filter() {
    let bodyQuery = {};
    if (this.form.value.search != '') {
      Object.assign(bodyQuery, { search: this.form.value.search });
    }
    this.breweriesService
      .list(bodyQuery, this.page)
      .subscribe((res: ApiResponseInterface) => {
        if (res.status == 'success') {
          this.page.totalElements = res.count || 0;
          this.page.totalPages = 1;
          this.breweries = res.data;
          this.snackService.info('Lista utenti aggiornata');
        }
      });
  }
}

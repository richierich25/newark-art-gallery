import { Component, OnInit, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-sales-report-list',
  templateUrl: './sales-report-list.component.html',
  styleUrls: ['./sales-report-list.component.css']
})
export class SalesReportListComponent extends PageListComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'sales-report';
    this.link = 'sales-report';
    this.placeholder = '...';
    this.results = 'Gallery Sales Report';
    this.found = 'sales-report';
    this.creation = 'Sale Report';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'sales-report';

    this.columns = [
      {
        type: 'report',
        title: { caption: 'Year', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'year',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'report',
        title: { caption: 'Total Gallery Sales', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'total',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
    ];

    super.initialize();
  }

}



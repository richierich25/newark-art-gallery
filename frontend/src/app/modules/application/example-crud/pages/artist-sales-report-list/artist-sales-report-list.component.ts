import { Component, OnInit, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-artist-sales-report-list',
  templateUrl: './artist-sales-report-list.component.html',
  styleUrls: ['./artist-sales-report-list.component.css']
})
export class ArtistSalesReportListComponent extends PageListComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'artist-sales-report';
    this.link = 'artist-sales-report';
    this.placeholder = 'Enter Artist Name';
    this.results = 'Records';
    this.found = 'artist-sales-report';
    this.creation = 'Artist Sales Report';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'artist-sales-report';

    this.columns = [
      {
        type: 'report',
        title: { caption: 'Artist Name', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'artistName',
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

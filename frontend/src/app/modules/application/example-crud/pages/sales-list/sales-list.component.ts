import { Component, OnInit, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent extends PageListComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'sales';
    this.link = 'sales';
    this.placeholder = 'sales...';
    this.results = 'Sales';
    this.found = 'sales';
    this.creation = 'Sale';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'sales';

    this.columns = [
      {
        title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'SaleNo', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'saleNo', class: 'text-primary font-weight-bold text-center' }
      },
      {
        title: { caption: 'CusSSN', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'cusSSN',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'Date', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'date',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'AssocEmpId', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'assocEmpId',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'AssocName', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'assocName',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'ArtistName', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'artistName',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'ArtworkName', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'artworkName',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'SellingPrice', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'sellingPrice',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'ArtistPay', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'artistPay',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'GalComm', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'galComm',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'AssocComm', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'assocComm',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
    ];

    super.initialize();
  }

}



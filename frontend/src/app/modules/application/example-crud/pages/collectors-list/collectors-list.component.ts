import { Component, OnInit, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-collectors-list',
  templateUrl: './collectors-list.component.html',
  styleUrls: ['./collectors-list.component.css']
})
export class CollectorsListComponent extends PageListComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'collectors';
    this.link = 'collectors';
    this.placeholder = 'Enter Collector Name';
    this.results = 'Collectors';
    this.found = 'collectors';
    this.creation = 'Collector';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'collectors';

    this.columns = [
      {
        title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'SSN', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'ssn', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Name', class: 'text-primary font-weight-bold text-center' },
        data: { field: 'name', class: 'text-primary font-weight-bold text-center' }
      },
      {
        title: { caption: 'Phone', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'phone',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'Email', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'email',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        title: { caption: 'Address', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'address',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },

    ];

    super.initialize();
  }

}



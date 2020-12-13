import { Component, OnInit, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent extends PageListComponent implements OnInit  {

  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'artists';
    this.link = 'artists';
    this.placeholder = 'artists...';
    this.results = 'Artists';
    this.found = 'artists';
    this.creation = 'Artist';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'artists';

    this.columns = [
      // {
      //   type: 'num',
      //   title: { caption: 'N°', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
      //   data: { field: 'N°', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      // },
      // {
      //   type: 'pos',
      //   title: { caption: 'Pos', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
      //   data: { field: 'Pos', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      // },
      {
        title: { caption: 'Id', class: 'text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-info text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      // {
      //   type: 'wiki',
      //   title: { caption: 'Wiki', class: 'text-center text-success' },
      //   data: { field: 'wikipediaLink', class: 'text-center text-success' }
      // },
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
      // {
      //   type: 'checkbox',
      //   title: { caption: 'Capital', class: 'font-weight-bold text-center' },
      //   data: { field: 'capital', class: 'font-weight-bold text-center' }
      // },
      // {
      //   type: 'subfield',
      //   title: { caption: 'Country', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
      //   data: {
      //     field: 'country',
      //     subfield: 'name',
      //     class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
      //   }
      // },
      // {
      //   type: 'img',
      //   title: { caption: 'Flag', class: 'text-secondary font-weight-bold text-center' },
      //   data: { field: 'image', class: 'font-weight-bold text-center' }
      // },
      // {
      //   type: 'subfield',
      //   title: { caption: 'Continent', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
      //   data: {
      //     field: 'continent',
      //     subfield: 'name',
      //     class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
      //   }
      // },
      // {
      //   type: 'subfield',
      //   title: { caption: 'Code', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
      //   data: {
      //     field: 'continent',
      //     subfield: 'code',
      //     class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
      //   }
      // },
    ];

    super.initialize();
  }

}


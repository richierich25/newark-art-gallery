import { Component, OnInit, Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-assoc-comm-report-list',
  templateUrl: './assoc-comm-report-list.component.html',
  styleUrls: ['./assoc-comm-report-list.component.css']
})
export class AssocCommReportListComponent extends PageListComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'assoc-comm-report';
    this.link = 'assoc-comm-report';
    this.placeholder = 'Enter Associate Name';
    this.results = 'Records';
    this.found = 'assoc-comm-report';
    this.creation = 'Associate Commission Report';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'assoc-comm-report';

    this.columns = [
      {
        type: 'report',
        title: { caption: 'AssocName', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'assocName',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'report',
        title: { caption: 'AssocEmpId', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'assocEmpId',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'report',
        title: { caption: 'Total Associate Commission', class: 'text-secondary font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'total',
          class: 'text-secondary text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
    ];

    super.initialize();
  }

}

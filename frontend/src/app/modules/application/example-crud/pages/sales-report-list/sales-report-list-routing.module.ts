import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesReportListComponent } from './sales-report-list.component';

const routes: Routes = [
  { path: '', component: SalesReportListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReportListRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssocCommReportListComponent } from './assoc-comm-report-list.component';

const routes: Routes = [
  { path: '', component: AssocCommReportListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssocCommReportListRoutingModule { }

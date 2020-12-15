import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistSalesReportListComponent } from './artist-sales-report-list.component';

const routes: Routes = [
  { path: '', component: ArtistSalesReportListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistSalesReportListRoutingModule { }

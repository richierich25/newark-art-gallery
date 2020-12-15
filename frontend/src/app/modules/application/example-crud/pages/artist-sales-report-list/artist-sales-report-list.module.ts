import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtistSalesReportListComponent } from './artist-sales-report-list.component';
import { ArtistSalesReportListRoutingModule } from './artist-sales-report-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';





@NgModule({
  declarations: [ArtistSalesReportListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArtistSalesReportListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ArtistSalesReportListComponent
  ],
  providers: [
  ],
})
export class ArtistSalesReportListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SalesReportListComponent } from './sales-report-list.component';
import { SalesReportListRoutingModule } from './sales-report-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';



@NgModule({
  declarations: [SalesReportListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalesReportListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    SalesReportListComponent
  ],
  providers: [
  ],
})
export class SalesReportListModule { }

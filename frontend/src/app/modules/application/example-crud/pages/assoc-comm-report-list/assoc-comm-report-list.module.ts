import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AssocCommReportListComponent } from './assoc-comm-report-list.component';
import { AssocCommReportListRoutingModule } from './assoc-comm-report-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';




@NgModule({
  declarations: [AssocCommReportListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AssocCommReportListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    AssocCommReportListComponent
  ],
  providers: [
  ],
})
export class AssocCommReportListModule { }

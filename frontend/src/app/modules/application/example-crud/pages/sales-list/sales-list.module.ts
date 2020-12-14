import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SalesListComponent } from './sales-list.component';
import { SalesListRoutingModule } from './sales-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';



@NgModule({
  declarations: [SalesListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalesListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    SalesListComponent
  ],
  providers: [
  ],
})
export class SalesListModule { }

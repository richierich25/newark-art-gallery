import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollectorsListComponent } from './collectors-list.component';
import { CollectorsListRoutingModule } from './collectors-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';



@NgModule({
  declarations: [CollectorsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CollectorsListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    CollectorsListComponent
  ],
  providers: [
  ],
})
export class CollectorsListModule { }

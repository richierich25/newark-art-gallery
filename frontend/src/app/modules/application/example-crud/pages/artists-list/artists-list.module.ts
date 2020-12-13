import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtistsListComponent } from './artists-list.component';
import { ArtistsListRoutingModule } from './artists-list-routing.module';

import { GridModule } from '../../components/grid/grid.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { SearchResultModule } from '../../components/search-result/search-result.module';



@NgModule({
  declarations: [ArtistsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArtistsListRoutingModule,
    GridModule,
    PaginationModule,
    SearchBarModule,
    SearchResultModule,
  ],
  exports: [
    ArtistsListComponent
  ],
  providers: [
  ],
})
export class ArtistsListModule { }

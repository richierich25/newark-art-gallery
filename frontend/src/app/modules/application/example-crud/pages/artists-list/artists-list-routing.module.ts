import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsListComponent } from './artists-list.component';

const routes: Routes = [
  { path: '', component: ArtistsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsListRoutingModule { }

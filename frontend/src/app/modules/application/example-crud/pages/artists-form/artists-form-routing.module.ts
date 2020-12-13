import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsFormComponent } from './artists-form.component';

const routes: Routes = [
  { path: '', component: ArtistsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsFormRoutingModule { }

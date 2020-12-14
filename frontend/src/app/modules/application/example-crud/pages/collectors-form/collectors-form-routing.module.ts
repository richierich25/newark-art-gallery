import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectorsFormComponent } from './collectors-form.component';

const routes: Routes = [
  { path: '', component: CollectorsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorsFormRoutingModule { }

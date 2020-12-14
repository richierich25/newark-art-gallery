import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectorsListComponent } from './collectors-list.component';

const routes: Routes = [
  { path: '', component: CollectorsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorsListRoutingModule { }

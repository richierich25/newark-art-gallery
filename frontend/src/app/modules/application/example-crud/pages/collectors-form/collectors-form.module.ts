import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollectorsFormComponent } from './collectors-form.component';
import { CollectorsFormRoutingModule } from './collectors-form-routing.module';


@NgModule({
  declarations: [CollectorsFormComponent],
  imports: [
    CommonModule,
    CollectorsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CollectorsFormComponent
  ],
})
export class CollectorsFormModule { }

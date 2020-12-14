import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalesFormComponent } from './sales-form.component';
import { SalesFormRoutingModule } from './sales-form-routing.module';

@NgModule({
  declarations: [SalesFormComponent],
  imports: [
    CommonModule,
    SalesFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [SalesFormComponent],
})
export class SalesFormModule {}

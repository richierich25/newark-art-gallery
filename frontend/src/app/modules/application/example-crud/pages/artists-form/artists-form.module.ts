import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtistsFormComponent } from './artists-form.component';
import { ArtistsFormRoutingModule } from './artists-form-routing.module';

@NgModule({
  declarations: [ArtistsFormComponent],
  imports: [
    CommonModule,
    ArtistsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ArtistsFormComponent
  ],
})
export class ArtistsFormModule { }

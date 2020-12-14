import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../components/page-form/page-form.component';

@Component({
  selector: 'app-collectors-form',
  templateUrl: './collectors-form.component.html',
  styleUrls: ['./collectors-form.component.css']
})
export class CollectorsFormComponent extends PageFormComponent implements OnInit {
  ngOnInit(): void {}

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {
    this.endpoint = 'collectors';
    this.titleForm = 'Collector Form';
    this.icon = 'fas fa-city';
    super.initialize();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: null,
      ssn: [null, [Validators.required]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern('[0-9 ]*')]],
      email: [null, [Validators.required]],
      address: null,
    });
    super.createForm();
  }

  resetForm(): void {
    this.item.id = null;
    this.item.ssn = null;
    this.item.name = null;
    this.item.phone = null;
    this.item.email = null;
    this.item.address = null;
    super.resetForm();
  }

  setFormValue(item: any): void {
    this.form.controls.id.setValue(item.id);
    this.form.controls.ssn.setValue(item.ssn);
    this.form.controls.name.setValue(item.name);
    this.form.controls.phone.setValue(item.phone);
    this.form.controls.email.setValue(item.email);
    this.form.controls.address.setValue(item.address);
    super.setFormValue(item);
  }

  get ssn(): any {
    return this.form.get('ssn');
  }
  get name(): any {
    return this.form.get('name');
  }
  get phone(): any {
    return this.form.get('phone');
  }
  get email(): any {
    return this.form.get('email');
  }
}

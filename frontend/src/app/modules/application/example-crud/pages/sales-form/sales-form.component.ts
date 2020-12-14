import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { PageFormComponent } from '../../components/page-form/page-form.component';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent extends PageFormComponent implements OnInit {
  ngOnInit(): void {}

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {
    this.endpoint = 'sales';
    this.titleForm = 'Sales Form';
    this.icon = 'fas fa-city';
    super.initialize();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: null,
      saleNo: null,
      cusSSN: [null, [Validators.required]],
      date: [null, [Validators.required]],
      assocEmpId: [null, [Validators.required]],
      assocName: [null, [Validators.required]],
      artistName: [null, [Validators.required]],
      artworkName: [null, [Validators.required]],
      sellingPrice: [null, [Validators.required]],
      artistPay: null,
      galComm: null,
      assocComm: null,

    });
    super.createForm();
  }

  resetForm(): void {
    this.item.id = null;
    this.item.saleNo = null;
    this.item.cusSSN = null;
    this.item.date = null;
    this.item.assocEmpId = null;
    this.item.assocName = null;
    this.item.artistName = null;
    this.item.artworkName = null;
    this.item.sellingPrice = null;
    this.item.artistPay = null;
    this.item.galComm = null;
    this.item.assocComm = null;
    super.resetForm();
  }

  setFormValue(item: any): void {
    this.form.controls.id.setValue(item.id);
    this.form.controls.saleNo.setValue(item.saleNo);
    this.form.controls.cusSSN.setValue(item.cusSSN);
    this.form.controls.date.setValue(item.date);
    this.form.controls.assocEmpId.setValue(item.assocEmpId);
    this.form.controls.assocName.setValue(item.assocName);
    this.form.controls.artistName.setValue(item.artistName);
    this.form.controls.artworkName.setValue(item.artworkName);
    this.form.controls.sellingPrice.setValue(item.sellingPrice);
    this.form.controls.artistPay.setValue(item.artistPay);
    this.form.controls.galComm.setValue(item.galComm);
    this.form.controls.assocComm.setValue(item.assocComm);
    super.setFormValue(item);
  }

  onCopy(): void {
    this.item.id = null;
    this.item.saleNo = null;
    this.item.artistPay = null;
    this.item.galComm = null;
    this.item.assocComm = null;
    this.form.get('id').setValue(null);
    this.form.get('saleNo').setValue(null);
    this.form.get('artistPay').setValue(null);
    this.form.get('galComm').setValue(null);
    this.form.get('assocComm').setValue(null);
  }

  onUpdate(): void {
    this.item = this.form.value;
    const id = this.item.id;
    const sellingPrice = +this.item.sellingPrice;
    this.item.artistPay = 9 / 10 * sellingPrice;
    this.item.galComm = (10 / 100 * sellingPrice) / 2;
    this.item.assocComm = (10 / 100 * sellingPrice) / 2;
    if ((id === null) || (id === undefined)) {
      this.createItem(this.url, this.item);
    } else {
      this.updateItem(this.url, this.item, id);
    }
  }

  createItem(url: any, item: any): void {
    this.itemsService.addItem(url, item)
      .subscribe(data => {
        this.item = data;
        this.form.setValue(data);
        alert('Record Created Successfully!');
      });
  }

  updateItem(url: any, item: any, id: number): void {
    this.itemsService.updateItem(item, id, url)
      .subscribe(data => {
        this.item = data;
        this.form.setValue(this.item);
        alert('Record Updated Successfully!');
      });
  }
  get cusSSN(): any {
    return this.form.get('cusSSN');
  }
  get date(): any {
    return this.form.get('date');
  }
  get assocEmpId(): any {
    return this.form.get('assocEmpId');
  }
  get assocName(): any {
    return this.form.get('assocName');
  }
  get artistName(): any {
    return this.form.get('artistName');
  }
  get artworkName(): any {
    return this.form.get('artworkName');
  }
  get sellingPrice(): any {
    return this.form.get('sellingPrice');
  }
}

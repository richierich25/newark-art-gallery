import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorsFormComponent } from './collectors-form.component';

describe('CollectorsFormComponent', () => {
  let component: CollectorsFormComponent;
  let fixture: ComponentFixture<CollectorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

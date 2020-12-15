import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocCommReportListComponent } from './assoc-comm-report-list.component';

describe('AssocCommReportListComponent', () => {
  let component: AssocCommReportListComponent;
  let fixture: ComponentFixture<AssocCommReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssocCommReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssocCommReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

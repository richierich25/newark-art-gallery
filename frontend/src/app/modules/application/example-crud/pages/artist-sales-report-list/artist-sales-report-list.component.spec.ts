import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSalesReportListComponent } from './artist-sales-report-list.component';

describe('ArtistSalesReportListComponent', () => {
  let component: ArtistSalesReportListComponent;
  let fixture: ComponentFixture<ArtistSalesReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSalesReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSalesReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

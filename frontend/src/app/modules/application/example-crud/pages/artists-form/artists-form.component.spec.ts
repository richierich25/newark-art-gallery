import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsFormComponent } from './artists-form.component';

describe('ArtistsFormComponent', () => {
  let component: ArtistsFormComponent;
  let fixture: ComponentFixture<ArtistsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

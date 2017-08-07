import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsRowComponent } from './locations-row.component';

describe('LocationsRowComponent', () => {
  let component: LocationsRowComponent;
  let fixture: ComponentFixture<LocationsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

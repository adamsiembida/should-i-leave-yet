import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshIndicatorComponent } from './refresh-indicator.component';

describe('RefreshIndicatorComponent', () => {
  let component: RefreshIndicatorComponent;
  let fixture: ComponentFixture<RefreshIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

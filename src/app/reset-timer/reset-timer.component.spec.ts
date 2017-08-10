import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetTimerComponent } from './reset-timer.component';

describe('ResetTimerComponent', () => {
  let component: ResetTimerComponent;
  let fixture: ComponentFixture<ResetTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

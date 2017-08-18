import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIndicatorComponent } from './github-indicator.component';

describe('GithubIndicatorComponent', () => {
  let component: GithubIndicatorComponent;
  let fixture: ComponentFixture<GithubIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

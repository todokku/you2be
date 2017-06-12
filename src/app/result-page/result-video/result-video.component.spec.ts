import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultVideoComponent } from './result-video.component';

describe('ResultVideoComponent', () => {
  let component: ResultVideoComponent;
  let fixture: ComponentFixture<ResultVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

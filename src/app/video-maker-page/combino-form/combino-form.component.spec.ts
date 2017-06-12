import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinoFormComponent } from './combino-form.component';

describe('CombinoFormComponent', () => {
  let component: CombinoFormComponent;
  let fixture: ComponentFixture<CombinoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

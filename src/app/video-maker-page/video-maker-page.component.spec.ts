import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMakerPageComponent } from './video-maker-page.component';

describe('VideoMakerPageComponent', () => {
  let component: VideoMakerPageComponent;
  let fixture: ComponentFixture<VideoMakerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMakerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMakerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

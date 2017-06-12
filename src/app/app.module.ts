import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoMakerComponent } from './video-maker/video-maker.component';
import { VideoMakerPageComponent } from './video-maker-page/video-maker-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ResultVideoComponent } from './result-page/result-video/result-video.component';
import { VideoEditorComponent } from './video-maker-page/video-editor/video-editor.component';
import { CombinoFormComponent } from './video-maker-page/combino-form/combino-form.component';
import { PreviewComponent } from './video-maker-page/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoMakerComponent,
    VideoMakerPageComponent,
    ResultPageComponent,
    ResultVideoComponent,
    VideoEditorComponent,
    CombinoFormComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

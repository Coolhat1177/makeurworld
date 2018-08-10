import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanvasviewerPage } from './canvasviewer';

@NgModule({
  declarations: [
    CanvasviewerPage,
  ],
  imports: [
    IonicPageModule.forChild(CanvasviewerPage),
  ],
})
export class CanvasviewerPageModule {}

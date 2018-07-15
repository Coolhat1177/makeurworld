import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageviewerPage } from './imageviewer';

@NgModule({
  declarations: [
    ImageviewerPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageviewerPage),
  ],
})
export class ImageviewerPageModule {}

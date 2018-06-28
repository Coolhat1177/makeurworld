import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoStorePage } from './video-store';

@NgModule({
  declarations: [
    VideoStorePage,
  ],
  imports: [
    IonicPageModule.forChild(VideoStorePage),
  ],
})
export class VideoStorePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageStorePage } from './image-store';

@NgModule({
  declarations: [
    ImageStorePage,
  ],
  imports: [
    IonicPageModule.forChild(ImageStorePage),
  ],
})
export class ImageStorePageModule {}

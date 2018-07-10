import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagePickPage } from './image-pick';

@NgModule({
  declarations: [
    ImagePickPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagePickPage),
  ],
})
export class ImagePickPageModule {}

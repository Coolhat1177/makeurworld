import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CropimgPage } from './cropimg';

@NgModule({
  declarations: [
    CropimgPage,
  ],
  imports: [
    IonicPageModule.forChild(CropimgPage),
  ],
})
export class CropimgPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicStorePage } from './music-store';

@NgModule({
  declarations: [
    MusicStorePage,
  ],
  imports: [
    IonicPageModule.forChild(MusicStorePage),
  ],
})
export class MusicStorePageModule {}

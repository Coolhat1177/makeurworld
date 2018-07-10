import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicGalPage } from './music-gal';

@NgModule({
  declarations: [
    MusicGalPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicGalPage),
  ],
})
export class MusicGalPageModule {}

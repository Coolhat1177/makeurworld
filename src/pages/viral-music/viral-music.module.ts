import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViralMusicPage } from './viral-music';

@NgModule({
  declarations: [
    ViralMusicPage,
  ],
  imports: [
    IonicPageModule.forChild(ViralMusicPage),
  ],
})
export class ViralMusicPageModule {}

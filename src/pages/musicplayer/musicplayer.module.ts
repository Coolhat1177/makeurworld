import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicplayerPage } from './musicplayer';

@NgModule({
  declarations: [
    MusicplayerPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicplayerPage),
  ],
})
export class MusicplayerPageModule {}

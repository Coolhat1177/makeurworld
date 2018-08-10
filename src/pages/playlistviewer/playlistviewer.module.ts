import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaylistviewerPage } from './playlistviewer';

@NgModule({
  declarations: [
    PlaylistviewerPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaylistviewerPage),
  ],
})
export class PlaylistviewerPageModule {}

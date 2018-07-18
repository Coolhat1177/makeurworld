import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicplaylistPage } from './musicplaylist';

@NgModule({
  declarations: [
    MusicplaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicplaylistPage),
  ],
})
export class MusicplaylistPageModule {}

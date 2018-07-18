import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicsuggestionPage } from './musicsuggestion';

@NgModule({
  declarations: [
    MusicsuggestionPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicsuggestionPage),
  ],
})
export class MusicsuggestionPageModule {}

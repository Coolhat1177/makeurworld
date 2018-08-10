import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavviewerPage } from './favviewer';

@NgModule({
  declarations: [
    FavviewerPage,
  ],
  imports: [
    IonicPageModule.forChild(FavviewerPage),
  ],
})
export class FavviewerPageModule {}

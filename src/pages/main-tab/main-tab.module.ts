import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainTabPage } from './main-tab';

@NgModule({
  declarations: [
    MainTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MainTabPage),
  ],
})
export class MainTabPageModule {}

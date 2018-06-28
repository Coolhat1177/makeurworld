import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreTabPage } from './store-tab';

@NgModule({
  declarations: [
    StoreTabPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreTabPage),
  ],
})
export class StoreTabPageModule {}

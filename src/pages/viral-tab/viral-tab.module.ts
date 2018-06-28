import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViralTabPage } from './viral-tab';

@NgModule({
  declarations: [
    ViralTabPage,
  ],
  imports: [
    IonicPageModule.forChild(ViralTabPage),
  ],
})
export class ViralTabPageModule {}

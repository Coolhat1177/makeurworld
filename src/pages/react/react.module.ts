import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactPage } from './react';

@NgModule({
  declarations: [
    ReactPage,
  ],
  imports: [
    IonicPageModule.forChild(ReactPage),
  ],
})
export class ReactPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoverPage } from './cover';

@NgModule({
  declarations: [
    CoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CoverPage),
  ],
})
export class CoverPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddaPage } from './adda';

@NgModule({
  declarations: [
    AddaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddaPage),
  ],
})
export class AddaPageModule {}

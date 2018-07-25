import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateplaylistPage } from './createplaylist';

@NgModule({
  declarations: [
    CreateplaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateplaylistPage),
  ],
})
export class CreateplaylistPageModule {}

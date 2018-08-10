import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileplaylistPage } from './profileplaylist';

@NgModule({
  declarations: [
    ProfileplaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileplaylistPage),
  ],
})
export class ProfileplaylistPageModule {}

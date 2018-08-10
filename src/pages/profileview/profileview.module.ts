import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileviewPage } from './profileview';

@NgModule({
  declarations: [
    ProfileviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileviewPage),
  ],
})
export class ProfileviewPageModule {}

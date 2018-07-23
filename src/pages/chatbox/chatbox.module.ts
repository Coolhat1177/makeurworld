import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatboxPage } from './chatbox';

@NgModule({
  declarations: [
    ChatboxPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatboxPage),
  ],
})
export class ChatboxPageModule {}

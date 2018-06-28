
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-music-store',
  templateUrl: 'music-store.html'
})
export class MusicStorePage {
  public category: string = 'Music_Play';
  public categories: Array<string> = ['Music_Play','Playlist']

  constructor(public navCtrl: NavController) { }

  onTabChanged(tabName) {
    this.category = tabName;
  }
}

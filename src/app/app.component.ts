import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { LandingPage } from '../pages/landing/landing';
import { MainTabPage } from '../pages/main-tab/main-tab';
import { MusicStorePage } from '../pages/music-store/music-store';
import { ImageStorePage } from '../pages/image-store/image-store';
import { MusicplayerPage } from '../pages/musicplayer/musicplayer';
import { VideoStorePage } from '../pages/video-store/video-store';
import { VideoplayerPage } from '../pages/videoplayer/videoplayer';
import { ChatboxPage } from '../pages/chatbox/chatbox';
// import { ImageviewerPage } from '../pages/imageviewer/imageviewer';
// import { SignInPage } from '../pages/sign-in/sign-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage= VideoStorePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


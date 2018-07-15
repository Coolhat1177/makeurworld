import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MainTabPage } from '../pages/main-tab/main-tab';
import { StoreTabPage } from '../pages/store-tab/store-tab';
import { AddaPage } from '../pages/adda/adda';
import { MusicplayerPage } from '../pages/musicplayer/musicplayer';
import { ViralTabPage } from '../pages/viral-tab/viral-tab';
import { ImageStorePage } from '../pages/image-store/image-store';
import { VideoStorePage } from '../pages/video-store/video-store';
import { ViralImagePage } from '../pages/viral-image/viral-image';
import { ViralMusicPage } from '../pages/viral-music/viral-music';
import { ViralVideoPage } from '../pages/viral-video/viral-video';
import { CoverPage } from '../pages/cover/cover';
import { SwipeSegmentDirective } from '../directives/SwipeSegmentDirective';
import { MusicStorePage } from "../pages/music-store/music-store";
import { ImgGalPage } from '../pages/img-gal/img-gal';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignInServices } from '../services/SignInServices';
import { SignUpServices } from '../services/SignUpServices';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { ConnectionServices } from '../services/ServerConnection';
import { AlertServices } from '../services/AlertServices';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
import { OtpPage } from '../pages/otp/otp';
import { CreditService } from '../services/CreditService';
import { MessagePage } from '../pages/message/message';
import { NotificationPage } from '../pages/notification/notification';
import { RequestPage } from '../pages/request/request';
import { SearchPage } from '../pages/search/search';
import { TopHeaderServices } from '../services/TopHeaderService';
import { NotifiService } from '../services/NotifiService';
import { RequestService } from '../services/RequestService';
import { MessageService } from '../services/MessageService';
import { SearchService } from '../services/SearchServices';
import { UploadPage } from '../pages/upload/upload';
import { VideoGalPage } from '../pages/video-gal/video-gal';
import { MusicGalPage } from '../pages/music-gal/music-gal';
import { FileOpener } from '@ionic-native/file-opener';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { ImgCrpPage } from '../pages/img-crp/img-crp';
import { ImageStoreService } from '../services/ImageStoreService';
import { ImagePicker } from '@ionic-native/image-picker';
import { ImagePickPage } from '../pages/image-pick/image-pick';
import { BgProSetServices } from '../services/BgProSetServices';
import { ImageviewerPage } from '../pages/imageviewer/imageviewer';
import { ImagesuggestPage } from '../pages/imagesuggest/imagesuggest';
import { ReactionPage } from '../pages/reaction/reaction';
import { CommentPage } from '../pages/comment/comment';
import { ImageZoomServices } from '../services/ImageZoomServices';
import { SuggestionServices } from '../services/SuggestionServices';
import { ReactionCenterPage} from '../component/reaction/reaction';
import { ReactionServices } from '../services/InteractionServices';
import { ReactPage } from '../pages/react/react';
import { AddCnavasPage } from '../pages/add-cnavas/add-cnavas';


@NgModule({
  declarations: [
    MyApp,
    MainTabPage,
    StoreTabPage,
    AddaPage,
    MusicplayerPage,
    ViralTabPage,
    ImageStorePage,
    MusicStorePage,
    VideoStorePage,
    ViralImagePage,
    ViralMusicPage,
    ViralVideoPage,
    CoverPage,
    SwipeSegmentDirective,
    LandingPage,
    SignInPage,
    ForgetPasswordPage,
    SignUpPage,
    OtpPage,
    MessagePage,
    NotificationPage,
    RequestPage,
    SearchPage,
    UploadPage,
    ImgGalPage,
    VideoGalPage,
    MusicGalPage,
    ImgCrpPage,
    ImagePickPage,
    ImageviewerPage,
    ImagesuggestPage,
    CommentPage,
    ReactionPage,
    ReactionCenterPage,
    ReactPage,
    AddCnavasPage
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularCropperjsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainTabPage,
    StoreTabPage,
    AddaPage,
    MusicplayerPage,
    ViralTabPage,
    ImageStorePage,
    MusicStorePage,
    VideoStorePage,
    ViralImagePage,
    ViralMusicPage,
    ViralVideoPage,
    CoverPage,
    LandingPage,
    SignInPage,
    ForgetPasswordPage,
    SignUpPage,
    OtpPage,
    MessagePage,
    NotificationPage,
    RequestPage,
    SearchPage,
    UploadPage,
    ImgGalPage,
    VideoGalPage,
    MusicGalPage,
    ImgCrpPage,
    ImagePickPage,
    ImageviewerPage,
    ImagesuggestPage,
    CommentPage,
    ReactionPage,
    ReactPage,
    AddCnavasPage

   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignInServices,
    SignUpServices,
    ConnectionServices,
    AlertServices,
    NativeStorage,
    CreditService,
    ImageStoreService,
    TopHeaderServices,
    NotifiService,
    RequestService,
    MessageService,
    SearchService,
    Camera,
    ImagePicker,
    FileOpener,
    BgProSetServices,
    ImageZoomServices,
    SuggestionServices,
    ReactionServices
  

  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { File } from '@ionic-native/file';
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
import { AgmCoreModule } from "@agm/core";
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
import { Media } from '@ionic-native/media';
import { StoreModule } from '@ngrx/store';
import { ImCrpPage } from '../pages/im-crp/im-crp';
import { MusicsuggestionPage } from '../pages/musicsuggestion/musicsuggestion';
import { VideosuggestionPage } from '../pages/videosuggestion/videosuggestion';
import { MusicplaylistPage } from '../pages/musicplaylist/musicplaylist';
import { VideofavPage } from '../pages/videofav/videofav';
import { AuthService } from '../providers/auth0/auth.service';
import { IonicStorageModule } from '@ionic/storage';
import { mediaStateReducer } from '../providers/store/store';
import { AudioProvider } from '../providers/audio/audio';
import { CloudProvider } from '../providers/cloud/cloud';
import { MusicplayerServices } from '../services/MusicplayServices';
import { VideoplayerPage } from '../pages/videoplayer/videoplayer';
import { ChatboxPage } from '../pages/chatbox/chatbox';
import { PersonalChatServices } from '../services/PersonalChatServices';
import { VideoPlayerServices } from '../services/VideoPlayerServices';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { GoodVideoComponent } from '../vidcomponents/good-video/good-video';
import { UplaodimagePage } from '../pages/uplaodimage/uplaodimage';

import { UplaodvideoPage } from '../pages/uplaodvideo/uplaodvideo';
import { UplaodmusicPage } from '../pages/uplaodmusic/uplaodmusic';
import { AddlocationPage } from '../pages/addlocation/addlocation';
import { MapService } from '../services/MapServices';
import { CanvasviewerPage } from '../pages/canvasviewer/canvasviewer';
import { PlaylistviewerPage } from '../pages/playlistviewer/playlistviewer';
import { FavviewerPage } from '../pages/favviewer/favviewer';
import { CanvasService } from '../services/CanvasService';
import { CanvassuggestionPage } from '../pages/canvassuggestion/canvassuggestion';
import { FavsuggestionPage } from '../pages/favsuggestion/favsuggestion';
import { PlaylistsuggestionPage } from '../pages/playlistsuggestion/playlistsuggestion';
import { PlaylistService } from '../services/PlaylistService';
import { FavService } from '../services/FavServices';
import { AddimagePage } from '../pages/addimage/addimage';
import { AddmusicPage } from '../pages/addmusic/addmusic';
import { AddvideoPage } from '../pages/addvideo/addvideo';
import { ViralServices } from '../services/ViralServices';
import { ImageOptionPop } from '../pages/popover/imagePopover';
import { SettingPage } from '../pages/setting/setting';
import { ProfileviewPage } from '../pages/profileview/profileview';
import { FreindsPage } from '../pages/freinds/freinds';
import { ProfileServices } from '../services/ProfileService';
import { ProfileaddaPage } from '../pages/profileadda/profileadda';
import { ProfilefriendsPage } from '../pages/profilefriends/profilefriends';
import { ProfileimagePage } from '../pages/profileimage/profileimage';
import { ProfilmusicPage } from '../pages/profilmusic/profilmusic';
import { ProfileinfoPage } from '../pages/profileinfo/profileinfo';
import { ProfilevideoPage } from '../pages/profilevideo/profilevideo';
import { SettingServices } from '../services/SettingService';
import { LocationChooserPage } from '../component/location/location';
import { PrivacyPage } from '../pages/privacy/privacy';
import { HeaderPage } from '../component/header/header';
import { CanvasPage } from '../pages/canvas/canvas';
import { PlaylistPage } from '../pages/playlist/playlist';
import { FavouritePage } from '../pages/favourite/favourite';
import { ProfilecanvasPage } from '../pages/profilecanvas/profilecanvas';
import { ProfilefavPage } from '../pages/profilefav/profilefav';
import { ProfileplaylistPage } from '../pages/profileplaylist/profileplaylist';
import { StoreHeaderPage } from '../component/header/storeheader';
import { ViralHeaderPage } from '../component/header/viralHeader';
import { ProdileHeaderPage } from '../component/header/profileheader';
import { UploadServices } from '../services/UploadServices';

//import { ImgCrpServices } from '../services/imgCrpServices';



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
    LocationChooserPage,
    ReactPage,
    AddCnavasPage,
    ImCrpPage,
    MusicsuggestionPage,
    VideosuggestionPage,
    MusicplaylistPage,
    VideofavPage,
    VideoplayerPage,
    ChatboxPage,
    GoodVideoComponent,
    UplaodimagePage,
    UplaodmusicPage,
    UplaodvideoPage,
    AddlocationPage,
    CanvasviewerPage,
    PlaylistviewerPage,
    FavviewerPage,
    CanvassuggestionPage,
    FavsuggestionPage,
    PlaylistsuggestionPage,
    AddimagePage,
    AddmusicPage,
    AddvideoPage,
    ImageOptionPop,
    SettingPage,
    ProfileviewPage,
    FreindsPage,
    ProfileviewPage,
    FreindsPage,
    ProfileaddaPage,
    ProfilefriendsPage,
    ProfileimagePage,
    ProfilmusicPage,
    ProfileinfoPage,
    ProfilevideoPage,
    FreindsPage,
    PrivacyPage,
    HeaderPage,
    CanvasPage,
    PlaylistPage,
    FavouritePage,
    ProfilecanvasPage,
    ProfilefavPage,
    ProfileplaylistPage,
    StoreHeaderPage,
    ViralHeaderPage,
    ProdileHeaderPage

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularCropperjsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1CHZcYMGt_nJfQYQWSlNcptT-7U64dj0'
    }),
    StoreModule.forRoot({
      appState: mediaStateReducer
    }),
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
    AddCnavasPage,
    ImCrpPage,
    MusicsuggestionPage,
    VideosuggestionPage,
    MusicplaylistPage,
    VideofavPage,
    VideoplayerPage,
    ChatboxPage,
    UplaodimagePage,
    UplaodmusicPage,
    UplaodvideoPage,
    AddlocationPage,
    CanvasviewerPage,
    PlaylistviewerPage,
    FavviewerPage,
    CanvassuggestionPage,
    FavsuggestionPage,
    PlaylistsuggestionPage,
    AddimagePage,
    AddmusicPage,
    AddvideoPage,
    ImageOptionPop,
    SettingPage,
    ProfileviewPage,
    FreindsPage,
    ProfileaddaPage,
    ProfilefriendsPage,
    ProfileimagePage,
    ProfilmusicPage,
    ProfileinfoPage,
    ProfilevideoPage,
    FreindsPage,
    PrivacyPage,
    CanvasPage,
    PlaylistPage,
    FavouritePage,
    ProfilecanvasPage,
    ProfilefavPage,
    ProfileplaylistPage,
   


   
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
    ReactionServices,
    BgProSetServices,
    Media,
    File,
    AudioProvider,
    CloudProvider,
    MusicplayerServices,
    PersonalChatServices,
    VideoPlayerServices,
    SafariViewController,
    ScreenOrientation,
    MapService,
    CanvasService,
    PlaylistService,
    FavService,
    ViralServices,
    ImageOptionPop,
    ProfileServices,
    SettingServices,
    UploadServices
   
    
    
    
    //ImgCrpServices
  

  ]
})
export class AppModule {}

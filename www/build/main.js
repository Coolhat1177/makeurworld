webpackJsonp([25],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, signUpServices, credit, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpServices = signUpServices;
        this.credit = credit;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.otp = function (form) {
        var _this = this;
        console.log(form.value.otpNumber);
        this.credit.check().then(function (data) {
            _this.signUpServices.otpConformation(form.value.otpNumber, data[0]).subscribe(function (data) {
                if (data['status']) {
                    if (data[0][0]['status']) {
                        _this.storage.set('loged', data[0][0]['loged']);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__landing_landing__["a" /* LandingPage */]);
                    }
                    else {
                        _this.alertCtrl.errorALert(data[0][0]['message']);
                    }
                }
                else {
                    _this.alertCtrl.errorALert("Could not connect to server.");
                }
            });
        });
    };
    OtpPage.prototype.goToRoot = function () {
        this.navCtrl.popToRoot();
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-otp',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/otp/otp.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar>\n  \n    <button ion-button clear class=\'reomve-signIn\' (click)="goToBack()"> Cancel</button>\n\n    \n  </ion-navbar>\n\n\n  \n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <div>\n  <form #otpForm="ngForm" (ngSubmit)="otp(otpForm)">\n\n      <ion-list>\n   \n      <ion-item  no-lines>\n        \n          <h1 class=\'header-sign-Up\'>Enter your otp.</h1>\n        \n      </ion-item>\n\n     \n\n      \n          <ion-grid>\n              <ion-row >\n                  <ion-col >\n                          <ion-item  no-lines>\n        \n                                  <ion-label color="primary" floating>OTP</ion-label>\n                                  <ion-input type="text" focus-me text-center name="otpNumber" ngModel required></ion-input>\n                              </ion-item>\n                         \n                  </ion-col>\n                \n              </ion-row>\n          </ion-grid>\n        \n      \n\n          \n                          <ion-row>\n                                  <ion-col>\n                                          <ion-item no-lines >\n                                                  <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!otpForm.valid">\n                                                      Submit\n                                                    </button>\n                                              </ion-item>\n                                      </ion-col>\n                                 \n                              </ion-row>\n\n\n                              <ion-row>\n                                <ion-col>\n                                        <ion-item no-lines  text-center>\n                                            <button ion-button clear class=\'resend-Otp\' (click)="goToBack()"> Resend Otp</button>\n                                            </ion-item>\n                                    </ion-col>\n                               \n                            </ion-row>\n\n                         \n     \n      \n      \n     \n      \n\n     \n\n    </ion-list>\n        \n         \n         \n         \n        \n      \n      \n\n  </form>\n</div>\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__["a" /* SignUpServices */],
            __WEBPACK_IMPORTED_MODULE_3__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__["a" /* AlertServices */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_observeOn__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_observeOn__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NativeStorage } from '@ionic-native/native-storage';



var SignInServices = /** @class */ (function () {
    function SignInServices(con, alertCtrl, storage) {
        this.con = con;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    SignInServices.prototype.submitWithEmail = function (email, password) {
        var info = {
            'email': 'p@p.p',
            'password': '1234567',
        };
        console.log(info);
        var info1 = JSON.stringify(info);
        var url = "http://app.makeurworld.com/log/login/login_in";
        return this.con.postData(info1, url);
    };
    SignInServices.prototype.submitWithPhone = function (phone, password) {
        var info = {
            'phone': phone,
            'password': password,
        };
        var info1 = JSON.stringify(info);
        console.log(info1);
        var url = "http://app.makeurworld.com/log/login/login_in_phone";
        return this.con.postData(info1, url);
    };
    SignInServices.prototype.otpCheck = function (data) {
        var url = "http://app.makeurworld.com/log/login/optVerificationCheck";
        return this.con.postDataOtp(data, url);
    };
    SignInServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], SignInServices);
    return SignInServices;
    var _a, _b, _c;
}());

//# sourceMappingURL=SignInServices.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddaPage = /** @class */ (function () {
    function AddaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddaPage');
    };
    AddaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adda',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/adda/adda.html"*/'<!--\n  Generated template for the AddaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>adda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/adda/adda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddaPage);
    return AddaPage;
}());

//# sourceMappingURL=adda.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_pick_image_pick__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoverPage = /** @class */ (function () {
    function CoverPage(navCtrl, navParams, actionSheetController, camera, toastCtrl, altCtrl, modelCtr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.altCtrl = altCtrl;
        this.modelCtr = modelCtr;
    }
    CoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoverPage');
    };
    CoverPage.prototype.choseForBg = function () {
        // //
        // const actionsheet = this.actionSheetController.create({
        //   title:"Add Photos",
        //   buttons: [
        //     {
        //       text:"From Storage",
        //       handler: ()=> {
        //         const options: CameraOptions={
        //           quality:100,
        //           destinationType:this.camera.DestinationType.DATA_URL,
        //           encodingType:this.camera.EncodingType.JPEG,
        //           sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
        //           mediaType:this.camera.MediaType.PICTURE,
        //           correctOrientation:true,
        //           saveToPhotoAlbum:true
        //         }
        //         let toast = this.toastCtrl.create({
        //           message: 'User was added successfully',
        //           duration: 1000,
        //           position: 'top'
        //         });
        //         toast.onDidDismiss(() => {
        //           console.log('Dismissed toast');
        //         });
        //         toast.present();
        //         console.log(15);
        //         this.camera.getPicture(options);
        //       }
        //     },
        //     {
        //       text:"Open Camera",
        //       handler: ()=> {
        //        const options: CameraOptions={
        //          quality:100,
        //          destinationType:this.camera.DestinationType.DATA_URL,
        //          encodingType:this.camera.EncodingType.JPEG,
        //          mediaType:this.camera.MediaType.PICTURE,
        //          correctOrientation:true,
        //          saveToPhotoAlbum:true
        //        }
        //        this.crop.crop("http://m.makeurworld.com/public/images/mw0.jpg", {quality: 75})
        //        .then(
        //          newImage =>  this.altCtrl.errorALert('new image path is: ' + newImage),
        //          error => console.log('Error cropping image', error)
        //        );
        //       //  this.camera.getPicture(options).then(data=>{
        //       //   this.altCtrl.errorALert("ok");
        //       //     this.crop.crop("assets/imgs/ter1.jpg", {quality: 75})
        //       //     .then(
        //       //       newImage => console.log('new image path is: ' + newImage),
        //       //       error => console.error('Error cropping image', error)
        //       //     );
        //       //  });;
        //       //  this.image = `data:image/jpeg;base64,${result}` 
        //       //  this.crop.crop(this.image, {quality: 75})
        //       //     .then(
        //       //       newImage => console.log('new image path is: ' + newImage),
        //       //       error => console.error('Error cropping image', error)
        //       //     );
        //       }
        //     },
        //     {
        //       text:'Cancel',
        //       role:'cancel'
        //     }
        //   ]
        // }) ;
        // actionsheet.present();
        //o
    };
    CoverPage.prototype.choseForPr = function () {
        var profilePick = this.modelCtr.create(__WEBPACK_IMPORTED_MODULE_4__image_pick_image_pick__["a" /* ImagePickPage */]);
        profilePick.present();
    };
    CoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cover',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/cover/cover.html"*/'\n<ion-header>\n\n  <ion-navbar>\n   \n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n \n   <ion-row>\n    <ion-col class=\'profileImgDisplay\'>\n    <div class=\'profileImgDisplayIn\'>\n      <div class=\'coverBgAr\' id=\'vanilla-demo\'>\n          <div class=\'coverBgArIn\'>\n        <img src="assets/imgs/ter1.jpg">\n        </div>\n        <div class=\'changeBgIcon\'>\n            <button clear ion-botton class=\'changeBgIconB\' (click)="choseForBg()">\n              <ion-icon name=\'camera\' class=\'bgChIcon\'>\n               \n              </ion-icon>\n              \n            </button>\n          </div>\n        \n      </div>\n      <div class=\'coverPrAr\'>\n          <div class=\'coverPrArIN\'>\n            <div class=\'coverPrImgAr\'>\n              <div class=\'coverPrImgArIn\'>\n                  <img *ngIf="image" [src]="image" class="coverPrImg">\n              </div>\n              <!-- src=\'assets/imgs/ter2.jpg\' -->\n              <div class=\'changePrIcon\'>\n                  <button clear ion-botton class=\'changePrIconB\' (click)="choseForPr()">\n                    <ion-icon name=\'camera\' class=\'prChIcon\'>\n                     \n                    </ion-icon>\n                    \n                  </button>\n                </div>\n\n            </div>\n            <div class=\'coverPrInfoAr\'>\n                <div class="coverPrInfoArIn">\n                  <div class=\'coverPrNameAr\'>\n                    <div class=\'coverPrNameArIn\'>\n                        Katty Perry\n                    </div>\n                    <div class=\'coverPrSubAr\'>\n                      <div class=\'coverPrSubArIn\'>\n                        Singer\n                      </div>\n                       \n                    </div>\n                      \n                  </div>\n\n                </div>\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n    </ion-col>\n   </ion-row>\n   <ion-row class=\'updateRow1\'>\n     <div class="col col-50 updatebox">\n       <div class=\'updateboxIn0\'>\n            adda\n       </div>\n       </div>\n   \n       <div class="col col-50 updatebox">\n          <div class=\'updateboxIn1\'>\n               adda\n          </div>\n          </div>\n   </ion-row>\n\n   <ion-row class=\'updateRow1\'>\n      <div class="col col-50 updatebox">\n          <div class=\'updateboxIn2\'>\n               adda\n          </div>\n          </div>\n    \n          <div class="col col-50 updatebox">\n              <div class=\'updateboxIn3\'>\n                   adda\n              </div>\n              </div>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/cover/cover.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_AlertServices__["a" /* AlertServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_AlertServices__["a" /* AlertServices */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _g || Object])
    ], CoverPage);
    return CoverPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=cover.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submit = {};
    }
    ForgetPasswordPage.prototype.ionViewWillEnter = function () {
        this.navbar.hideBackButton = true;
        this.submit['email'] = true;
    };
    ForgetPasswordPage.prototype.forgetPassword = function (form) {
        console.log(form);
    };
    ForgetPasswordPage.prototype.goToBack = function () {
        this.navCtrl.pop();
    };
    ForgetPasswordPage.prototype.changeSubmitWithEmail = function () {
        this.submit['email'] = true;
    };
    ForgetPasswordPage.prototype.chanegSubmitWithNumber = function () {
        this.submit['email'] = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], ForgetPasswordPage.prototype, "navbar", void 0);
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-password',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/forget-password/forget-password.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar>\n      <button ion-button clear class=\'reomve-signIn\' (click)="goToBack()"> Cancel</button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <div>\n  <form #forgetPassword="ngForm" (ngSubmit)="forgetPassword(forgetPassword)">\n\n      <ion-list>\n   \n      <ion-item text-center no-lines>\n        \n          <h1 class=\'header-sign-Up\'>Reset your password through</h1>\n        \n      </ion-item>\n     \n      <ion-item no-lines class=\'normal-padding\' *ngIf="submit.email">  \n          <ion-input type="email" placeholder="Email" text-center class=\'sign-input\'  name="forgetPasswordEmail"\n          ngModel required\n          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" focus-me></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class=\'normal-padding\' *ngIf="!submit.email">  \n        <ion-input type="number" placeholder="Phone number" text-center class=\'sign-input\'  name="forgetPasswordPhone"\n        ngModel\n      required minlength=\'10\' focus-me></ion-input>\n    </ion-item>\n\n   \n      \n      <ion-item no-lines *ngIf="!submit.email">\n          <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!forgetPassword.valid">\n              Forget Password\n         </button>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="submit.email">\n        <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!forgetPassword.valid">\n            Forget Password\n       </button>\n    </ion-item>\n     \n      \n\n     \n\n    </ion-list>\n        \n         \n         \n         \n        \n      \n      \n\n  </form>\n</div>\n\n\n\n</ion-content>\n\n\n<ion-footer>\n    <button ion-button clear class=\'reomve-signIn\' (click)="changeSubmitWithEmail()" *ngIf="!submit.email"> Use Email instead</button>\n    <button ion-button clear class=\'reomve-signIn\' (click)="chanegSubmitWithNumber()" *ngIf="submit.email"> Use Phone Number instead</button>\n</ion-footer>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/forget-password/forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ImageStoreService__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageStorePage = /** @class */ (function () {
    function ImageStorePage(navCtrl, alertCtrl, credit, imgStore) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.credit = credit;
        this.imgStore = imgStore;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.imageArray = [];
        this.tabs = ["Photo", "Canvas"];
    }
    ImageStorePage.prototype.ionViewWillEnter = function () {
        this.SwipedTabsSlider.slideTo(0, 100);
    };
    ImageStorePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    ImageStorePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    ImageStorePage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    ImageStorePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    ImageStorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageStorePage');
        this.loadStor();
    };
    ImageStorePage.prototype.loadStor = function () {
        var _this = this;
        this.credit.check().then(function (data) {
            // console.log(data);
            _this.imgStore.firstLoad(data[0], data[1]).subscribe(function (data) {
                if (data['status']) {
                    for (var key in data[0]) {
                        _this.imgStore.addToList(data[0][key]);
                    }
                    _this.imageArray = _this.imgStore.getList();
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ImageStorePage.prototype, "SwipedTabsSlider", void 0);
    ImageStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-store',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/image-store/image-store.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>imageStore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n    <ion-segment  class="SwipedTabs-tabs"  >\n      <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n      [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n        {{tab}}\n      </ion-segment-button>\n    </ion-segment>\n  \n    <!-- here is our dynamic line  "indicator"-->\n    <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n  \n    <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                (ionSlideWillChange)="updateIndicatorPosition()"\n                (ionSlideDidChange)="updateIndicatorPosition()"\n                (pan)="updateIndicatorPosition()"\n                [pager]="false"\n          >\n      <ion-slide>\n        <ion-row padding>\n          <div class="flexbin flexbin-margin">\n            <div *ngFor="let image of imageArray">\n                <img src="{{image[\'image_url\']}}" />\n            </div>\n           \n        </div>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <h1>Canvas </h1>\n      </ion-slide>\n    </ion-slides>\n\n    \n\n\n</ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/image-store/image-store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AlertServices__["a" /* AlertServices */],
            __WEBPACK_IMPORTED_MODULE_3__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_4__services_ImageStoreService__["a" /* ImageStoreService */]])
    ], ImageStorePage);
    return ImageStorePage;
}());

//# sourceMappingURL=image-store.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgCrpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImgCrpPage = /** @class */ (function () {
    function ImgCrpPage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.croppedImage = null;
        this.myImage = null;
        this.scaleValX = 1;
        this.scaleValY = 1;
        this.cropperOptions = {
            dragMode: 'crop',
            aspectRatio: 2,
            autoCrop: true,
            movable: true,
            zoomable: true,
            scalable: true,
            autoCropArea: 0.8,
        };
    }
    // captureImage() {
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     sourceType: this.camera.PictureSourceType.CAMERA
    //   }
    //   this.camera.getPicture(options).then((imageData) => {
    //     this.myImage = 'data:image/jpeg;base64,' + "https://jpeg.org/images/jpeg-home.jpg ";
    //   });
    // }
    ImgCrpPage.prototype.captureImage = function () {
        this.myImage = "../assets/imgs/ter1.jpg";
    };
    ImgCrpPage.prototype.reset = function () {
        this.angularCropper.cropper.reset();
    };
    ImgCrpPage.prototype.clear = function () {
        this.angularCropper.cropper.clear();
    };
    ImgCrpPage.prototype.rotate = function () {
        this.angularCropper.cropper.rotate(90);
    };
    ImgCrpPage.prototype.zoom = function (zoomIn) {
        var factor = zoomIn ? 0.1 : -0.1;
        this.angularCropper.cropper.zoom(factor);
    };
    ImgCrpPage.prototype.scaleX = function () {
        this.scaleValX = this.scaleValX * -1;
        this.angularCropper.cropper.scaleX(this.scaleValX);
    };
    ImgCrpPage.prototype.scaleY = function () {
        this.scaleValY = this.scaleValY * -1;
        this.angularCropper.cropper.scaleY(this.scaleValY);
    };
    ImgCrpPage.prototype.move = function (x, y) {
        this.angularCropper.cropper.move(x, y);
    };
    ImgCrpPage.prototype.save = function () {
        var croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.croppedImage = croppedImgB64String;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('angularCropper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_cropperjs__["AngularCropperjsComponent"])
    ], ImgCrpPage.prototype, "angularCropper", void 0);
    ImgCrpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-img-crp',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/img-crp/img-crp.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button color="danger" (click)="reset()">\n        Reset\n      </button>\n    </ion-buttons>\n    <ion-title>Ionic CropperJS</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="clear()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button icon-only color="secondary" (click)="save()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <button ion-button full (click)="captureImage()" *ngIf="!myImage">Capture Image</button>\n  \n  <angular-cropper #angularCropper [cropperOptions]="cropperOptions" [imageUrl]="myImage" *ngIf="myImage"></angular-cropper>\n \n  <ion-row *ngIf="myImage">\n    <ion-col col-4>\n      <button ion-button outline icon-left color="primary" (click)="zoom(true)">\n        <ion-icon name="add"></ion-icon> Zoom\n      </button>\n    </ion-col>\n    <ion-col col-4>\n      <button ion-button outline icon-left color="primary" (click)="zoom(false)">\n        <ion-icon name="remove"></ion-icon> Zoom\n      </button>\n    </ion-col>\n    <ion-col col-4>\n      <button ion-button outline icon-left (click)="rotate()">\n        <ion-icon name="refresh"></ion-icon> 90 deg\n      </button>\n    </ion-col>\n \n    <ion-col col-2>\n      <button ion-button clear (click)="scaleX()">\n        Flip X\n      </button>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button clear (click)="scaleY()">\n        Flip Y\n      </button>\n    </ion-col>\n \n    <ion-col col-2>\n      <button ion-button clear icon-only (click)="move(0, -10)">\n        <ion-icon name="arrow-round-up"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button clear icon-only (click)="move(0, 10)">\n        <ion-icon name="arrow-round-down"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button clear icon-only (click)="move(-10, 0)">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button clear icon-only (click)="move(10, 0)">\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n \n  <ion-card *ngIf="croppedImage">\n    <ion-card-header>My Result</ion-card-header>\n    <ion-card-content>\n      <img [src]="croppedImage">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-buttons start>\n    <button ion-button color="danger" (click)="reset()">\n      Reset\n    </button>\n  </ion-buttons>\n  <ion-title>Ionic CropperJS</ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only color="danger" (click)="clear()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n    <button ion-button icon-only color="secondary" (click)="save()">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-buttons>\n \n</ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/img-crp/img-crp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], ImgCrpPage);
    return ImgCrpPage;
}());

//# sourceMappingURL=img-crp.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgGalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImgGalPage = /** @class */ (function () {
    function ImgGalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgList = this.navParams.get('arr');
        //for(let i=0;i<imgList.length();i++) console.log(imgList[i]);
    }
    ImgGalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImgGalPage');
    };
    ImgGalPage.prototype.deletePhoto = function (index) {
        this.imgList.splice(index, 1);
    };
    ImgGalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-img-gal',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/img-gal/img-gal.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>imgGal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n <ion-grid>\n  <ion-row> \n  <ion-col col-6 *ngFor="let photo of imgList; let id = index">\n    <ion-card class="block">\n      <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n      <img [src]="photo" *ngIf="photo" />\n    </ion-card>\n  </ion-col>\n</ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/img-gal/img-gal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ImgGalPage);
    return ImgGalPage;
}());

//# sourceMappingURL=img-gal.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ServerConnection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_SignInServices__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_SignUpServices__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__otp_otp__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landing_landing__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, con, signInService, signUpService, alertCtrl, storage, credit) {
        this.navCtrl = navCtrl;
        this.con = con;
        this.signInService = signInService;
        this.signUpService = signUpService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.credit = credit;
        this.email = true;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignInPage.prototype.ionViewWillEnter = function () {
        this.navbar.hideBackButton = true;
        this.email = true;
        this.storage.remove('user');
    };
    SignInPage.prototype.signIn = function (form) {
        console.log(form);
        if (this.email) {
            this.signInEmail(form);
        }
        else {
            this.signUpPhone(form);
        }
    };
    SignInPage.prototype.signInEmail = function (form) {
        var _this = this;
        this.signInService.submitWithEmail(form.value.signInEmail.toLowerCase(), form.value.signInPassword).subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.storage.set('user', data['user']);
                _this.storage.set('loged', data['loged']);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__landing_landing__["a" /* LandingPage */]);
            }
            else {
                _this.alertCtrl.errorALert(data['error']);
            }
        }, function (error) {
            _this.alertCtrl.errorALert("Could not connect to server.");
        });
    };
    SignInPage.prototype.signUpPhone = function (form) {
        var _this = this;
        var status = this.signInService.submitWithPhone(form.value.signInPhone, form.value.signInPassword).subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.storage.remove('user');
                _this.storage.ready().then(function () {
                    _this.storage.set('user', data['user']);
                    _this.storage.ready().then(function () {
                        _this.otpCheckVerification();
                    });
                });
                _this.storage.set('loged', 0);
            }
            else {
                _this.alertCtrl.errorALert(data['error']);
            }
        }, function (error) {
            _this.alertCtrl.errorALert("Could not connect to server.");
        });
    };
    SignInPage.prototype.otpCheckVerification = function () {
        var _this = this;
        console.log("i m here");
        this.credit.check().then(function (data) {
            // console.log(data[0]);
            _this.signInService.otpCheck(data[0]).subscribe(function (data) {
                if (data['status']) {
                    if (parseInt(data[0][0]['verify']) == 1) {
                        console.log(data[0][0]['loged']);
                    }
                    else {
                        _this.storage.set('loged', data[0][0]['loged']);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__otp_otp__["a" /* OtpPage */]);
                    }
                }
                else {
                    _this.alertCtrl.errorALert("Could not connect to server.");
                }
            }, function (error) {
                console.log(error);
                _this.alertCtrl.errorALert("Could not connect to server.");
            });
            ;
        });
    };
    SignInPage.prototype.goToRoot = function () {
        this.navCtrl.popToRoot();
    };
    SignInPage.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    SignInPage.prototype.goToForgetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password__["a" /* ForgetPasswordPage */]);
    };
    SignInPage.prototype.changeSubmitWithEmail = function () {
        this.email = true;
    };
    SignInPage.prototype.chanegSubmitWithNumber = function () {
        this.email = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], SignInPage.prototype, "navbar", void 0);
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/sign-in/sign-in.html"*/'\n\n<ion-header no-border>\n\n    <ion-navbar>\n        <button ion-button clear class=\'reomve-signIn\' (click)="goToRoot()"> Cancel</button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n<ion-content padding>\n  \n\n  \n    <div>\n    <form #signInForm="ngForm" (ngSubmit)="signIn(signInForm)">\n\n        <ion-list>\n     \n        <ion-item  no-lines>\n          \n            <h1 class=\'header-sign-Up\'>Log in to your World</h1>\n          \n        </ion-item>\n        <ion-item no-lines >\n          \n            <p class=\'sign-Up-starter\'>New User? <span (click)="goToSignUp()">Sign Up</span></p>\n          \n        </ion-item>\n        <ion-item no-lines class=\'normal-padding\' *ngIf="email">\n          \n           \n            <ion-input type="email"\n             placeholder="Email"\n              text-center class=\'sign-input\'\n              name="signInEmail"\n              ngModel required\n              pattern="^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$" focus-me></ion-input>\n          \n        </ion-item>\n\n        <ion-item no-lines class=\'normal-padding\' *ngIf="!email">\n          \n            <ion-input type="number" \n            placeholder="Phone number" \n            text-center class=\'sign-input\'\n            name="signInPhone"\n              ngModel\n            required maxlength=\'10\' focus-me></ion-input>\n          \n        </ion-item>\n\n        <ion-item no-lines class=\'normal-padding\'>\n          \n           \n            <ion-input type="password"\n             placeholder="Password"\n              text-center class=\'sign-input\'\n              name="signInPassword"\n              ngModel\n            required  minlength=\'7\'></ion-input>\n            \n           \n          \n        </ion-item>\n\n        <ion-item no-lines text-right>\n          \n            <button ion-button clear class=\'reomve-signIn\' (click)="goToForgetPassword()">Forget Password</button>\n          \n        </ion-item>\n        \n        <ion-item no-lines *ngIf="!email">\n            <button type="submit"\n             ion-button block round \n              class=\'sign-button\'\n              [disabled]="!signInForm.valid">\n                Log In\n              </button>\n        </ion-item>\n\n        <ion-item no-lines *ngIf="email">\n            <button type="submit"\n             ion-button block round \n              class=\'sign-button\'\n              [disabled]="!signInForm.valid">\n                Log In\n              </button>\n        </ion-item>\n       \n        \n\n       \n\n      </ion-list>\n          \n           \n           \n           \n          \n        \n        \n\n    </form>\n  </div>\n\n  \n\n</ion-content>\n\n\n<ion-footer>\n    <button ion-button clear class=\'reomve-signIn\' (click)="changeSubmitWithEmail()" *ngIf="!email"> Use Email instead</button>\n    <button ion-button clear class=\'reomve-signIn\' (click)="chanegSubmitWithNumber()" *ngIf="email"> Use Phone Number instead</button>\n</ion-footer>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_ServerConnection__["a" /* ConnectionServices */],
            __WEBPACK_IMPORTED_MODULE_6__services_SignInServices__["a" /* SignInServices */],
            __WEBPACK_IMPORTED_MODULE_8__services_SignUpServices__["a" /* SignUpServices */],
            __WEBPACK_IMPORTED_MODULE_9__services_AlertServices__["a" /* AlertServices */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_11__services_CreditService__["a" /* CreditService */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_tab_store_tab__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viral_tab_viral_tab__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adda_adda__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__musicplayer_musicplayer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cover_cover__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_message__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__request_request__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notification_notification__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_upload__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the MainTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainTabPage = /** @class */ (function () {
    function MainTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cover = __WEBPACK_IMPORTED_MODULE_6__cover_cover__["a" /* CoverPage */];
        this.store = __WEBPACK_IMPORTED_MODULE_2__store_tab_store_tab__["a" /* StoreTabPage */];
        this.viral = __WEBPACK_IMPORTED_MODULE_3__viral_tab_viral_tab__["a" /* ViralTabPage */];
        this.adda = __WEBPACK_IMPORTED_MODULE_4__adda_adda__["a" /* AddaPage */];
        this.upload = __WEBPACK_IMPORTED_MODULE_11__upload_upload__["a" /* UploadPage */];
        this.musicplayer = __WEBPACK_IMPORTED_MODULE_5__musicplayer_musicplayer__["a" /* MusicplayerPage */];
    }
    MainTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainTabPage');
    };
    MainTabPage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    MainTabPage.prototype.goToMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__message_message__["a" /* MessagePage */]);
    };
    MainTabPage.prototype.goToRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__request_request__["a" /* RequestPage */]);
    };
    MainTabPage.prototype.goToNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__notification_notification__["a" /* NotificationPage */]);
    };
    MainTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main-tab',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/main-tab/main-tab.html"*/'<ion-header class=\'mainHeaderTop\'>\n\n  <ion-navbar>\n      <ion-grid>\n          <ion-row>\n              <ion-col >MUW</ion-col>\n              <ion-col ></ion-col>\n              <ion-col ></ion-col>\n              <ion-col ></ion-col>\n             \n              <ion-col ><ion-icon name="custom-icon6" class=\'iconHeader\' (click)="goToSearch()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="custom-icon9" class=\'iconHeader\' (click)="goToMessage()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="custom-icon8" class=\'iconHeader\' (click)="goToRequest()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="custom-icon7" class=\'iconHeader\' (click)="goToNotification()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="menu" class=\'iconHeader\'></ion-icon></ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-tabs>\n  <ion-tab [root]="cover" tabIcon="custom-icon1" tabTitle="Cover"></ion-tab>\n  <ion-tab [root]="store" tabIcon="custom-icon4" tabTitle="Store"></ion-tab>\n  <ion-tab [root]="viral" tabIcon="custom-icon3" tabTitle="Viral"></ion-tab>\n  <ion-tab [root]="upload" tabIcon="custom-icon10" tabTitle="Upload"></ion-tab>\n  <ion-tab [root]="adda" tabIcon="custom-icon5" tabTitle="Adda"></ion-tab>\n  <ion-tab [root]="musicplayer" tabIcon="custom-icon2" tabTitle="Mu"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/main-tab/main-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MainTabPage);
    return MainTabPage;
}());

//# sourceMappingURL=main-tab.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_store_image_store__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_store_music_store__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_store_video_store__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreTabPage = /** @class */ (function () {
    function StoreTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageStore = __WEBPACK_IMPORTED_MODULE_2__image_store_image_store__["a" /* ImageStorePage */];
        this.musicStore = __WEBPACK_IMPORTED_MODULE_3__music_store_music_store__["a" /* MusicStorePage */];
        this.videoStore = __WEBPACK_IMPORTED_MODULE_4__video_store_video_store__["a" /* VideoStorePage */];
    }
    StoreTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreTabPage');
    };
    StoreTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store-tab',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/store-tab/store-tab.html"*/'\n\n\n<<<<<<< HEAD\n<ion-content  class="top-44">\n=======\n<ion-content class=\'storageHeader\'>\n>>>>>>> 5f2bec325e2abf90cfb4d84a7c83f24fe1a84366\n    <ion-tabs tabsPlacement=\'top\'>\n  \n        <ion-tab [root]="imageStore" tabTitle="Image"></ion-tab>\n        <ion-tab [root]="musicStore"  tabTitle="Music"></ion-tab>\n        <ion-tab [root]="videoStore" tabTitle="Video"></ion-tab>\n      </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/store-tab/store-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StoreTabPage);
    return StoreTabPage;
}());

//# sourceMappingURL=store-tab.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicStorePage = /** @class */ (function () {
    function MusicStorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = ["Music Play", "Playlist"];
    }
    MusicStorePage.prototype.ionViewWillEnter = function () {
        this.SwipedTabsSlider.slideTo(0, 100);
    };
    MusicStorePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator1");
    };
    MusicStorePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    MusicStorePage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    MusicStorePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    MusicStorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageStorePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], MusicStorePage.prototype, "SwipedTabsSlider", void 0);
    MusicStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-store',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/music-store/music-store.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>musicStore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <ion-segment  class="SwipedTabs-tabs"  >\n    <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n    [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n      {{tab}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- here is our dynamic line  "indicator"-->\n  <div id=\'indicator1\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n\n  <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n              (ionSlideWillChange)="updateIndicatorPosition()"\n              (ionSlideDidChange)="updateIndicatorPosition()"\n              (pan)="updateIndicatorPosition()"\n              [pager]="false"\n        >\n    <ion-slide>\n      <h1>Image Page </h1>\n    </ion-slide>\n    <ion-slide>\n      <h1> PlayList </h1>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/music-store/music-store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MusicStorePage);
    return MusicStorePage;
}());

//# sourceMappingURL=music-store.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoStorePage = /** @class */ (function () {
    function VideoStorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = ["Video Play", "Favourite"];
    }
    VideoStorePage.prototype.ionViewWillEnter = function () {
        this.SwipedTabsSlider.slideTo(0, 100);
    };
    VideoStorePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator2");
    };
    VideoStorePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    VideoStorePage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    VideoStorePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    VideoStorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoStorePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], VideoStorePage.prototype, "SwipedTabsSlider", void 0);
    VideoStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video-store',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/video-store/video-store.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>videoStore</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content >\n  \n      <ion-segment  class="SwipedTabs-tabs"  >\n        <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n        [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n          {{tab}}\n        </ion-segment-button>\n      </ion-segment>\n    \n      <!-- here is our dynamic line  "indicator"-->\n      <div id=\'indicator2\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n    \n      <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                  (ionSlideWillChange)="updateIndicatorPosition()"\n                  (ionSlideDidChange)="updateIndicatorPosition()"\n                  (pan)="updateIndicatorPosition()"\n                  [pager]="false"\n            >\n        <ion-slide>\n          <h1>Video Play </h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Favourite</h1>\n        </ion-slide>\n      </ion-slides>\n  </ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/video-store/video-store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], VideoStorePage);
    return VideoStorePage;
}());

//# sourceMappingURL=video-store.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viral_image_viral_image__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viral_music_viral_music__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viral_video_viral_video__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViralTabPage = /** @class */ (function () {
    function ViralTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viralImage = __WEBPACK_IMPORTED_MODULE_2__viral_image_viral_image__["a" /* ViralImagePage */];
        this.viralMusic = __WEBPACK_IMPORTED_MODULE_3__viral_music_viral_music__["a" /* ViralMusicPage */];
        this.viralVideo = __WEBPACK_IMPORTED_MODULE_4__viral_video_viral_video__["a" /* ViralVideoPage */];
    }
    ViralTabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViralTabPage');
    };
    ViralTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viral-tab',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-tab/viral-tab.html"*/'\n<ion-content class=\'viralHeader\'>\n\n    <ion-tabs tabsPlacement="top">\n        <ion-tab [root]="viralImage" tabTitle="Image"></ion-tab>\n        \n        <ion-tab [root]="viralMusic" tabTitle="Music"></ion-tab>\n        <ion-tab [root]="viralVideo" tabTitle="Video"></ion-tab>\n      </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-tab/viral-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViralTabPage);
    return ViralTabPage;
}());

//# sourceMappingURL=viral-tab.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViralImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViralImagePage = /** @class */ (function () {
    function ViralImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViralImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViralImagePage');
    };
    ViralImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viral-image',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-image/viral-image.html"*/'<!--\n  Generated template for the ViralImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viralImage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-image/viral-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViralImagePage);
    return ViralImagePage;
}());

//# sourceMappingURL=viral-image.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralMusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViralMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViralMusicPage = /** @class */ (function () {
    function ViralMusicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViralMusicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViralMusicPage');
    };
    ViralMusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viral-music',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-music/viral-music.html"*/'<!--\n  Generated template for the ViralMusicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viralMusic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-music/viral-music.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViralMusicPage);
    return ViralMusicPage;
}());

//# sourceMappingURL=viral-music.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViralVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViralVideoPage = /** @class */ (function () {
    function ViralVideoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViralVideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViralVideoPage');
    };
    ViralVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viral-video',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-video/viral-video.html"*/'<!--\n  Generated template for the ViralVideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viralVideo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-video/viral-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViralVideoPage);
    return ViralVideoPage;
}());

//# sourceMappingURL=viral-video.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicplayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MusicplayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicplayerPage = /** @class */ (function () {
    function MusicplayerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MusicplayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicplayerPage');
    };
    MusicplayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-musicplayer',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/musicplayer/musicplayer.html"*/'<!--\n  Generated template for the MusicplayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>musicplayer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/musicplayer/musicplayer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MusicplayerPage);
    return MusicplayerPage;
}());

//# sourceMappingURL=musicplayer.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TopHeaderService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SearchServices__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, credit, topHeader, sService, searchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credit = credit;
        this.topHeader = topHeader;
        this.sService = sService;
        this.searchService = searchService;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator3");
    };
    SearchPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    SearchPage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    SearchPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    SearchPage.prototype.onInput = function (event) {
        var _this = this;
        this.credit.check().then(function (data) {
            var word = event.target.value;
            var filter = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!filter.test(word)) {
                var info = {
                    search_w: word,
                    from: _this.sService.lenList(),
                };
                console.log(_this.sService.lenList());
                var info1 = JSON.stringify(info);
                _this.topHeader.searchLoad(data[0], data[1], info1).subscribe(function (data) {
                    if (data['status']) {
                        for (var key in data[0]) {
                            _this.searchService.addList(data[0][key]);
                        }
                        console.log(_this.searchService.getList());
                    }
                });
            }
            else {
            }
        });
    };
    SearchPage.prototype.onCancel = function (event) {
        console.log("ok");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Slides */])
    ], SearchPage.prototype, "SwipedTabsSlider", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/search/search.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)" class=\'searchbarRadius\'></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-segment  class="SwipedTabs-tabs"  >\n    <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n    [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n      {{tab}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- here is our dynamic line  "indicator"-->\n  <div id=\'indicator3\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n\n  <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n              (ionSlideWillChange)="updateIndicatorPosition()"\n              (ionSlideDidChange)="updateIndicatorPosition()"\n              (pan)="updateIndicatorPosition()"\n              [pager]="false"\n        >\n    <ion-slide>\n      <h1>People</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>Adda </h1>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_1__services_TopHeaderService__["a" /* TopHeaderServices */],
            __WEBPACK_IMPORTED_MODULE_2__services_SearchServices__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__services_SearchServices__["a" /* SearchService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TopHeaderService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_MessageService__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams, credit, topHeader, messService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credit = credit;
        this.topHeader = topHeader;
        this.messService = messService;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this.messageLoad();
    };
    MessagePage.prototype.messageLoad = function () {
        var _this = this;
        this.credit.check().then(function (data) {
            _this.topHeader.messageLaod(data[0], data[1]).subscribe(function (data) {
                if (data['status']) {
                    for (var key in data[0]) {
                        _this.messService.addMessage(data[0][key]);
                    }
                }
            });
        });
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-message',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Message</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_3__services_TopHeaderService__["a" /* TopHeaderServices */],
            __WEBPACK_IMPORTED_MODULE_4__services_MessageService__["a" /* MessageService */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TopHeaderService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_RequestService__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, navParams, credit, topHeader, reqservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credit = credit;
        this.topHeader = topHeader;
        this.reqservice = reqservice;
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        this.requestLoad();
    };
    RequestPage.prototype.requestLoad = function () {
        var _this = this;
        this.credit.check().then(function (data) {
            _this.topHeader.requestLoad(data[0], data[1]).subscribe(function (data) {
                if (data['status']) {
                    for (var key in data[0]) {
                        _this.reqservice.addRequest(data[0][key]);
                    }
                }
            });
        });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-request',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/request/request.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_3__services_TopHeaderService__["a" /* TopHeaderServices */],
            __WEBPACK_IMPORTED_MODULE_4__services_RequestService__["a" /* RequestService */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TopHeaderService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_NotifiService__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, credit, topHeader, nservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credit = credit;
        this.topHeader = topHeader;
        this.nservice = nservice;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        this.notificationLoad();
    };
    NotificationPage.prototype.notificationLoad = function () {
        var _this = this;
        this.credit.check().then(function (data) {
            _this.topHeader.notificationLoad(data[0], data[1]).subscribe(function (data) {
                if (data['status']) {
                    for (var key in data[0]) {
                        _this.nservice.addNotifi(data[0][key]);
                    }
                    console.log(_this.nservice.getNotifi());
                }
            });
        });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/notification/notification.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-cneter>Notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_3__services_TopHeaderService__["a" /* TopHeaderServices */],
            __WEBPACK_IMPORTED_MODULE_4__services_NotifiService__["a" /* NotifiService */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_gal_img_gal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_gal_video_gal__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_crp_img_crp__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams, actionSheetController, camera, imagePicker, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.fileOpener = fileOpener;
        this.arr = [];
        this.arr1 = [];
    }
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage.prototype.chooseImg = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Add Photos",
            buttons: [
                {
                    text: "From Storage",
                    handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            saveToPhotoAlbum: true
                        };
                        _this.imagePicker.getPictures(options).then(function (imageData) {
                            for (var i = 0; i < imageData.length; i++) {
                                _this.base64Image = imageData[i];
                                _this.arr.push(_this.base64Image);
                                _this.arr.reverse();
                            }
                        }, function (err) { console.log(err); });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__img_gal_img_gal__["a" /* ImgGalPage */], { arr: _this.arr });
                    }
                },
                {
                    text: "From Camera",
                    handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            saveToPhotoAlbum: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.base64Image = "data:image/jpeg;base64," + imageData;
                            _this.arr.push(_this.base64Image);
                            _this.arr.reverse();
                        }, function (err) {
                            console.log(err);
                        });
                        console.log("check ok");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__img_gal_img_gal__["a" /* ImgGalPage */], { arr: _this.arr });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionsheet.present();
        // this.navCtrl.push(ImgGalPage,{ arr :this.arr});  
    };
    UploadPage.prototype.chooseVid = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Add Video",
            buttons: [
                {
                    text: "From Storage",
                    handler: function () {
                        var options = {
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            mediaType: _this.camera.MediaType.VIDEO,
                            saveToPhotoAlbum: true
                        };
                        _this.camera.getPicture(options).then(function (videoData) {
                            console.log("imageData" + videoData);
                            _this.base64Image = videoData;
                            _this.arr1.push(_this.base64Image);
                            _this.arr1.reverse();
                        }, function (err) { console.log(err); });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_gal_video_gal__["a" /* VideoGalPage */], { arr: _this.arr1 });
                    }
                },
                {
                    text: "From Camera",
                    handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            //encodingType:this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.VIDEO,
                            //correctOrientation:true,
                            saveToPhotoAlbum: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            console.log("imageData" + imageData);
                            _this.base64Image = "data:image/jpeg;base64," + imageData;
                            _this.arr1.push(_this.base64Image);
                            _this.arr1.reverse();
                        }, function (err) {
                            console.log(err);
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_gal_video_gal__["a" /* VideoGalPage */], { arr: _this.arr1 });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionsheet.present();
        // this.navCtrl.push(ImgGalPage,{ arr :this.arr});  
    };
    UploadPage.prototype.audioChoose = function () {
        this.fileOpener.open('path/to/file.pdf', 'application/pdf')
            .then(function () { return console.log('File is opened'); })
            .catch(function (e) { return console.log('Error opening file', e); });
    };
    UploadPage.prototype.pushCropPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__img_crp_img_crp__["a" /* ImgCrpPage */]);
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upload',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/upload/upload.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-row class=\'updateRow1\'>\n        <div class="col col-50 updatebox">\n          <div class=\'updateboxIn0\'>\n             <button ion-button clear class=\'uploadButton\' (click)="chooseImg()">Image</button>\n          </div>\n          </div>\n      \n          <div class="col col-50 updatebox">\n             <div class=\'updateboxIn1\'>\n                <button ion-button clear class=\'uploadButton\' (click)="audioChoose()">Music</button>\n             </div>\n             </div>\n      </ion-row>\n   \n      <ion-row class=\'updateRow1\'>\n         <div class="col col-50 updatebox">\n             <div class=\'updateboxIn2\'>\n                <button ion-button clear class=\'uploadButton\' (click)="chooseVid()">Video</button>\n             </div>\n             </div>\n       \n             <div class="col col-50 updatebox">\n                 <div class=\'updateboxIn3\'>\n                    <button ion-button clear class=\'uploadButton\'>Canvas</button>\n                 </div>\n                 </div>\n       </ion-row>\n\n       <ion-row class=\'updateRow1\'>\n          <div class="col col-50 updatebox">\n            <div class=\'updateboxIn0\'>\n                <button ion-button clear class=\'uploadButton\' (click)="pushCropPage()">Playlist</button>\n            </div>\n            </div>\n        \n            <div class="col col-50 updatebox">\n               <div class=\'updateboxIn1\'>\n                  <button ion-button clear class=\'uploadButton\'>Favorite</button>\n               </div>\n               </div>\n        </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoGalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoGalPage = /** @class */ (function () {
    function VideoGalPage(navCtrl, navParams, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileOpener = fileOpener;
        this.vidList = this.navParams.get('arr');
    }
    VideoGalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoGalPage');
    };
    VideoGalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video-gal',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/video-gal/video-gal.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>videoGal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-grid>\n   <ion-row>  -->\n   <!-- <ion-col col-6 *ngFor="let video of vidList; let id = index"> -->\n    <ion-content overflow-scroll="true">\n      <video controls="controls" preload="metadata"  webkit-playsinline="webkit-playsinline" class="videoPlayer">\n       <source [src]="video" type="video/mp4" />\n      </video>\n    </ion-content>\n   <!-- </ion-col>\n </ion-row>\n   </ion-grid> -->\n </ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/video-gal/video-gal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */]])
    ], VideoGalPage);
    return VideoGalPage;
}());

//# sourceMappingURL=video-gal.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adda/adda.module": [
		722,
		24
	],
	"../pages/cover/cover.module": [
		723,
		23
	],
	"../pages/forget-password/forget-password.module": [
		724,
		22
	],
	"../pages/image-pick/image-pick.module": [
		725,
		21
	],
	"../pages/image-store/image-store.module": [
		726,
		20
	],
	"../pages/img-crp/img-crp.module": [
		727,
		19
	],
	"../pages/img-gal/img-gal.module": [
		728,
		18
	],
	"../pages/landing/landing.module": [
		729,
		17
	],
	"../pages/main-tab/main-tab.module": [
		730,
		16
	],
	"../pages/message/message.module": [
		731,
		15
	],
	"../pages/music-gal/music-gal.module": [
		732,
		14
	],
	"../pages/music-store/music-store.module": [
		733,
		13
	],
	"../pages/musicplayer/musicplayer.module": [
		734,
		12
	],
	"../pages/notification/notification.module": [
		735,
		11
	],
	"../pages/request/request.module": [
		736,
		10
	],
	"../pages/search/search.module": [
		737,
		9
	],
	"../pages/sign-in/sign-in.module": [
		738,
		8
	],
	"../pages/store-tab/store-tab.module": [
		739,
		7
	],
	"../pages/upload/upload.module": [
		740,
		6
	],
	"../pages/video-gal/video-gal.module": [
		741,
		5
	],
	"../pages/video-store/video-store.module": [
		742,
		4
	],
	"../pages/viral-image/viral-image.module": [
		743,
		3
	],
	"../pages/viral-music/viral-music.module": [
		744,
		2
	],
	"../pages/viral-tab/viral-tab.module": [
		745,
		1
	],
	"../pages/viral-video/viral-video.module": [
		746,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 238;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreditService = /** @class */ (function () {
    function CreditService(storage) {
        this.storage = storage;
    }
    CreditService.prototype.check = function () {
        return Promise.all([this.storage.get('user'), this.storage.get('loged')]);
    };
    CreditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CreditService);
    return CreditService;
}());

//# sourceMappingURL=CreditService.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertServices = /** @class */ (function () {
    function AlertServices(alertBox) {
        this.alertBox = alertBox;
    }
    AlertServices.prototype.errorALert = function (mess) {
        var alert = this.alertBox.create({
            title: 'Error',
            message: mess,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    AlertServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertServices);
    return AlertServices;
}());

//# sourceMappingURL=AlertServices.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageStoreService = /** @class */ (function () {
    function ImageStoreService(con) {
        this.con = con;
        this.imgArr = [];
    }
    ImageStoreService.prototype.firstLoad = function (user, loged) {
        var url = "http://app.makeurworld.com/home/image/imgGal_load";
        return this.con.postDataFetch(user, loged, url);
    };
    ImageStoreService.prototype.addToList = function (data) {
        this.imgArr.push(data);
    };
    ImageStoreService.prototype.getList = function () {
        return this.imgArr;
    };
    ImageStoreService.prototype.bgProImg = function (user, loged) {
        var url = "http://app.makeurworld.com/home/image/imgGal_load";
        return this.con.postDataFetch(user, loged, url);
    };
    ImageStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */]) === "function" && _a || Object])
    ], ImageStoreService);
    return ImageStoreService;
    var _a;
}());

//# sourceMappingURL=ImageStoreService.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_otp__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_SignInServices__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_landing__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, signUpService, alertCtrl, storage, credit, signInService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpService = signUpService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.credit = credit;
        this.signInService = signInService;
        this.email = false;
        this.selectOptions = ['Male', 'Female'];
    }
    SignUpPage.prototype.ionViewWillEnter = function () {
        this.navbar.hideBackButton = true;
        this.email = false;
    };
    SignUpPage.prototype.signUp = function (form) {
        if (this.email) {
            this.signUpEmail(form);
        }
        else {
            this.signUpPhone(form);
        }
    };
    SignUpPage.prototype.signUpEmail = function (form) {
        var _this = this;
        this.signUpService.submitWithEmail(form.value.signUpFirstName, form.value.signUpLastName, form.value.signUpEmail.toLowerCase(), form.value.signUpPassword, form.value.signUpBirthDay, form.value.signUpGender).subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.storage.set('user', data['user']);
                _this.storage.set('loged', data['loged']);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__landing_landing__["a" /* LandingPage */]);
            }
            else {
                _this.alertCtrl.errorALert(data['error']);
            }
        }, function (error) {
            _this.alertCtrl.errorALert("Could not connect to server.");
        });
        ;
    };
    SignUpPage.prototype.signUpPhone = function (form) {
        var _this = this;
        var status = this.signUpService.submitWithPhone(form.value.signUpFirstName, form.value.signUpLastName, form.value.signUpPhoneNumber, form.value.signUpPassword, form.value.signUpBirthDay, form.value.signUpGender).subscribe(function (data) {
            console.log(data);
            if (data['status']) {
                _this.storage.set('loged', 0);
                _this.storage.remove('user');
                _this.storage.ready().then(function () {
                    _this.storage.set('user', data['user']);
                    _this.storage.ready().then(function () {
                        _this.otpCheckVerification();
                    });
                });
            }
            else {
                _this.alertCtrl.errorALert(data['error']);
            }
        }, function (error) {
            _this.alertCtrl.errorALert("Could not connect to server.");
        });
    };
    SignUpPage.prototype.otpCheckVerification = function () {
        var _this = this;
        console.log("i m here");
        this.credit.check().then(function (data) {
            // console.log(data[0]);
            _this.signInService.otpCheck(data[0]).subscribe(function (data) {
                if (data['status']) {
                    if (parseInt(data[0][0]['verify']) == 1) {
                        console.log(data[0][0]['loged']);
                    }
                    else {
                        _this.storage.set('loged', data[0][0]['loged']);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__otp_otp__["a" /* OtpPage */]);
                    }
                }
                else {
                    _this.alertCtrl.errorALert("Could not connect to server.1");
                }
            }, function (error) {
                console.log(error);
                _this.alertCtrl.errorALert("Could not connect to server.2");
            });
            ;
        });
    };
    SignUpPage.prototype.goToBack = function () {
        this.navCtrl.pop();
    };
    SignUpPage.prototype.changeSubmitWithEmail = function () {
        this.email = true;
    };
    SignUpPage.prototype.chanegSubmitWithNumber = function () {
        this.email = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], SignUpPage.prototype, "navbar", void 0);
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/sign-up/sign-up.html"*/'\n\n<ion-header no-border>\n\n    <ion-navbar>\n        <button ion-button clear class=\'reomve-signIn\' (click)="goToBack()"> Cancel</button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n<ion-content padding>\n  \n\n  \n    <div>\n    <form #signUpForm="ngForm" (ngSubmit)="signUp(signUpForm)">\n\n        <ion-list>\n     \n        <ion-item  no-lines>\n          \n            <h1 class=\'header-sign-Up\'>Create your world.</h1>\n          \n        </ion-item>\n\n       \n\n        \n            <ion-grid>\n                <ion-row >\n                    <ion-col width-40>\n                            <ion-item  no-lines>\n          \n                                    <ion-label color="primary" floating>First Name</ion-label>\n                                    <ion-input type="text" focus-me text-center name="signUpFirstName" ngModel required></ion-input>\n                                    \n                                   \n                                  \n                                </ion-item>\n                           \n                    </ion-col>\n                    <ion-col width-40>\n                            <ion-item  no-lines>\n          \n                                    <ion-label color="primary" floating>Last Name</ion-label>\n                                    <ion-input type="text" text-center name="signUpLastName" ngModel required></ion-input>\n                                    \n                                   \n                                  \n                                </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n          \n            \n            \n           \n          \n        \n\n            <ion-row *ngIf="!email">\n                    <ion-col>\n                            <ion-item no-lines >\n          \n                                    <ion-label color="primary" floating>Phone Number</ion-label>\n                                    <ion-input type="tel" text-center name="signUpPhoneNumber" ngModel required maxlength="10"></ion-input>\n\n                                </ion-item>\n                            </ion-col>\n            </ion-row>\n            <ion-row  *ngIf="email">\n                                <ion-col>\n\n                               \n\n                                <ion-item no-lines>\n          \n                                        <ion-label color="primary" floating>Email</ion-label>\n                                        <ion-input type="email" text-center name="signUpEmail" ngModel\n                                         required pattern="^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$"></ion-input>\n    \n                                 </ion-item>\n\n                        </ion-col>\n                   \n                </ion-row>\n        \n       \n                <ion-row>\n                        <ion-col>\n                                <ion-item no-lines>\n                                       \n                                                        \n                                        <ion-label color="primary" floating>Password</ion-label>\n                                        <ion-input type="password" text-center name="signUpPassword" ngModel required minlength="7" ></ion-input>\n                                        <ion-note item-end class=\'important-note\'>\n                                                        At lest 7 characters required\n                                                      </ion-note>\n                                        \n    \n                                    </ion-item>\n                            </ion-col>\n                       \n                    </ion-row>\n            \n       \n\n                    \n                    <ion-row >\n                            <ion-col>\n                                    <ion-item >\n                  \n                                           \n                                            <ion-label color="primary" floating >Birth Date</ion-label>\n                                            <ion-datetime displayFormat="MM/DD/YYYY" name="signUpBirthDay" ngModel required>\n                                            </ion-datetime>\n                \n        \n                                        </ion-item>\n                                </ion-col>\n                           \n                        </ion-row>\n\n                        \n      \n\n                        <ion-row >\n                                <ion-col>\n                                        <ion-item >\n                                                <ion-label color="primary" floating>Gender</ion-label>\n                                                <ion-select  no-lines name="signUpGender" ngModel required >\n                                                <ion-option\n                                                    *ngFor="let option of selectOptions"\n                                                    [value]="option">{{ option }}</ion-option>\n                                                </ion-select>\n            \n                                            </ion-item>\n                                    </ion-col>\n                               \n                            </ion-row>\n\n\n        \n\n            \n                            <ion-row *ngIf="!email">\n                                    <ion-col>\n                                            <ion-item no-lines >\n                                                    <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!signUpForm.valid">\n                                                        Sign Up\n                                                      </button>\n                                                </ion-item>\n                                        </ion-col>\n                                   \n                                </ion-row>\n\n                                <ion-row *ngIf="email">\n                                        <ion-col>\n                                                <ion-item no-lines >\n                                                        <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!signUpForm.valid">\n                                                            Sign Up\n                                                          </button>\n                                                    </ion-item>\n                                            </ion-col>\n                                       \n                                    </ion-row>\n    \n       \n        \n        \n       \n        \n\n       \n\n      </ion-list>\n          \n           \n           \n           \n          \n        \n        \n\n    </form>\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer>\n        <button ion-button clear class=\'reomve-signIn\' (click)="changeSubmitWithEmail()" *ngIf="!email" > Use Email instead</button>\n        <button ion-button clear class=\'reomve-signIn\' (click)="chanegSubmitWithNumber()" *ngIf="email"> Use Phone Number instead</button>\n</ion-footer>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__["a" /* SignUpServices */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__["a" /* AlertServices */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_7__services_SignInServices__["a" /* SignInServices */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var SearchService = /** @class */ (function () {
    function SearchService() {
        this.searchList = [];
    }
    SearchService.prototype.addList = function (data) {
        this.searchList.push(data);
    };
    SearchService.prototype.getList = function () {
        return this.searchList;
    };
    SearchService.prototype.lenList = function () {
        return this.searchList.length;
    };
    return SearchService;
}());

//# sourceMappingURL=SearchServices.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.message = [];
    }
    MessageService.prototype.addMessage = function (message) {
        this.message.push(message);
    };
    MessageService.prototype.getMessage = function () {
        return this.message;
    };
    return MessageService;
}());

//# sourceMappingURL=MessageService.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var RequestService = /** @class */ (function () {
    function RequestService() {
        this.request = [];
    }
    RequestService.prototype.addRequest = function (request) {
        this.request.push(request);
    };
    RequestService.prototype.getRequest = function () {
        return this.request;
    };
    return RequestService;
}());

//# sourceMappingURL=RequestService.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifiService; });
var NotifiService = /** @class */ (function () {
    function NotifiService() {
        this.notifi = [];
    }
    NotifiService.prototype.addNotifi = function (notification) {
        this.notifi.push(notification);
    };
    NotifiService.prototype.getNotifi = function () {
        return this.notifi;
    };
    return NotifiService;
}());

//# sourceMappingURL=NotifiService.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_BgProSetServices__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagePickPage = /** @class */ (function () {
    function ImagePickPage(navCtrl, navParams, viewCtrl, credit, imgStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.credit = credit;
        this.imgStore = imgStore;
        this.imageArray = [];
    }
    ImagePickPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImagePickPage');
        this.loadPickC();
    };
    ImagePickPage.prototype.dismissModel = function () {
        // console.log(15);
        this.viewCtrl.dismiss();
    };
    ImagePickPage.prototype.loadPickC = function () {
        var _this = this;
        this.credit.check().then(function (data) {
            _this.imgStore.bgProImg(data[0], data[1]).subscribe(function (data) {
                if (data['status']) {
                    for (var key in data[0]) {
                        _this.imgStore.addToList(data[0][key]);
                    }
                    console.log(_this.imgStore.getList());
                    _this.imageArray = _this.imgStore.getList();
                }
            });
        });
    };
    ImagePickPage.prototype.choseImg = function (i) {
    };
    ImagePickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-pick',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/image-pick/image-pick.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <div class=\'modalHeader\'>\n        <div class=\'modalDis\'>\n            <button ion-button clear  (click)="dismissModel()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </div>\n        <ion-title text-center>imagePick</ion-title>\n    </div>\n     \n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row >\n       \n        <ion-col col-md-3 col-4 col-sm-3   >\n            <div class="image-container" >\n            Hello\n            </div>\n          </ion-col>\n\n      <ion-col col-md-3 col-4 col-sm-3  *ngFor="let image of imageArray let i = index" >\n          <div class="image-container" [style.background-image]="\'url(\' + image[\'image_url\'] + \')\'" (click)="choseImg(i)" >\n           \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/image-pick/image-pick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_3__services_BgProSetServices__["a" /* BgProSetServices */]])
    ], ImagePickPage);
    return ImagePickPage;
}());

//# sourceMappingURL=image-pick.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicGalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MusicGalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicGalPage = /** @class */ (function () {
    function MusicGalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MusicGalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicGalPage');
    };
    MusicGalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-music-gal',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/music-gal/music-gal.html"*/'<!--\n  Generated template for the MusicGalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>musicGal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/music-gal/music-gal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MusicGalPage);
    return MusicGalPage;
}());

//# sourceMappingURL=music-gal.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(395);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main_tab_main_tab__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_store_tab_store_tab__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_adda_adda__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_musicplayer_musicplayer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_viral_tab_viral_tab__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_image_store_image_store__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_video_store_video_store__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_viral_image_viral_image__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viral_music_viral_music__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_viral_video_viral_video__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cover_cover__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_SwipeSegmentDirective__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_music_store_music_store__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_img_gal_img_gal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_landing_landing__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forget_password_forget_password__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sign_up_sign_up__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_SignInServices__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_SignUpServices__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_ServerConnection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_storage__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_otp_otp__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_CreditService__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_message_message__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_request_request__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_search_search__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_TopHeaderService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_NotifiService__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_RequestService__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_MessageService__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_SearchServices__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_upload_upload__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_video_gal_video_gal__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_music_gal_music_gal__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_file_opener__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_angular_cropperjs__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_img_crp_img_crp__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_ImageStoreService__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_image_picker__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_image_pick_image_pick__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_BgProSetServices__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_store_tab_store_tab__["a" /* StoreTabPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_adda_adda__["a" /* AddaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_musicplayer_musicplayer__["a" /* MusicplayerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_viral_tab_viral_tab__["a" /* ViralTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_image_store_image_store__["a" /* ImageStorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_music_store_music_store__["a" /* MusicStorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_video_store_video_store__["a" /* VideoStorePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_viral_image_viral_image__["a" /* ViralImagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viral_music_viral_music__["a" /* ViralMusicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_viral_video_viral_video__["a" /* ViralVideoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cover_cover__["a" /* CoverPage */],
                __WEBPACK_IMPORTED_MODULE_17__directives_SwipeSegmentDirective__["a" /* SwipeSegmentDirective */],
                __WEBPACK_IMPORTED_MODULE_21__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_img_gal_img_gal__["a" /* ImgGalPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_video_gal_video_gal__["a" /* VideoGalPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_music_gal_music_gal__["a" /* MusicGalPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_img_crp_img_crp__["a" /* ImgCrpPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_image_pick_image_pick__["a" /* ImagePickPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adda/adda.module#AddaPageModule', name: 'AddaPage', segment: 'adda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cover/cover.module#CoverPageModule', name: 'CoverPage', segment: 'cover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-pick/image-pick.module#ImagePickPageModule', name: 'ImagePickPage', segment: 'image-pick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-store/image-store.module#ImageStorePageModule', name: 'ImageStorePage', segment: 'image-store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/img-crp/img-crp.module#ImgCrpPageModule', name: 'ImgCrpPage', segment: 'img-crp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/img-gal/img-gal.module#ImgGalPageModule', name: 'ImgGalPage', segment: 'img-gal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-tab/main-tab.module#MainTabPageModule', name: 'MainTabPage', segment: 'main-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-gal/music-gal.module#MusicGalPageModule', name: 'MusicGalPage', segment: 'music-gal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-store/music-store.module#MusicStorePageModule', name: 'MusicStorePage', segment: 'music-store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musicplayer/musicplayer.module#MusicplayerPageModule', name: 'MusicplayerPage', segment: 'musicplayer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-tab/store-tab.module#StoreTabPageModule', name: 'StoreTabPage', segment: 'store-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-gal/video-gal.module#VideoGalPageModule', name: 'VideoGalPage', segment: 'video-gal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-store/video-store.module#VideoStorePageModule', name: 'VideoStorePage', segment: 'video-store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-image/viral-image.module#ViralImagePageModule', name: 'ViralImagePage', segment: 'viral-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-music/viral-music.module#ViralMusicPageModule', name: 'ViralMusicPage', segment: 'viral-music', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-tab/viral-tab.module#ViralTabPageModule', name: 'ViralTabPage', segment: 'viral-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-video/viral-video.module#ViralVideoPageModule', name: 'ViralVideoPage', segment: 'viral-video', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_32__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_48_angular_cropperjs__["AngularCropperjsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_store_tab_store_tab__["a" /* StoreTabPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_adda_adda__["a" /* AddaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_musicplayer_musicplayer__["a" /* MusicplayerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_viral_tab_viral_tab__["a" /* ViralTabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_image_store_image_store__["a" /* ImageStorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_music_store_music_store__["a" /* MusicStorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_video_store_video_store__["a" /* VideoStorePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_viral_image_viral_image__["a" /* ViralImagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viral_music_viral_music__["a" /* ViralMusicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_viral_video_viral_video__["a" /* ViralVideoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cover_cover__["a" /* CoverPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_img_gal_img_gal__["a" /* ImgGalPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_video_gal_video_gal__["a" /* VideoGalPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_music_gal_music_gal__["a" /* MusicGalPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_img_crp_img_crp__["a" /* ImgCrpPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_image_pick_image_pick__["a" /* ImagePickPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__services_SignInServices__["a" /* SignInServices */],
                __WEBPACK_IMPORTED_MODULE_26__services_SignUpServices__["a" /* SignUpServices */],
                __WEBPACK_IMPORTED_MODULE_29__services_ServerConnection__["a" /* ConnectionServices */],
                __WEBPACK_IMPORTED_MODULE_30__services_AlertServices__["a" /* AlertServices */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_34__services_CreditService__["a" /* CreditService */],
                __WEBPACK_IMPORTED_MODULE_50__services_ImageStoreService__["a" /* ImageStoreService */],
                __WEBPACK_IMPORTED_MODULE_39__services_TopHeaderService__["a" /* TopHeaderServices */],
                __WEBPACK_IMPORTED_MODULE_40__services_NotifiService__["a" /* NotifiService */],
                __WEBPACK_IMPORTED_MODULE_41__services_RequestService__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_42__services_MessageService__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_43__services_SearchServices__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_53__services_BgProSetServices__["a" /* BgProSetServices */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgProSetServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BgProSetServices = /** @class */ (function () {
    function BgProSetServices(con) {
        this.con = con;
        this.imgArr = [];
    }
    BgProSetServices.prototype.addToList = function (data) {
        this.imgArr.push(data);
    };
    BgProSetServices.prototype.getList = function () {
        return this.imgArr;
    };
    BgProSetServices.prototype.bgProImg = function (user, loged) {
        var url = "http://app.makeurworld.com/home/image/imgGal_load_bg";
        return this.con.postDataFetch(user, loged, url);
    };
    BgProSetServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */]) === "function" && _a || Object])
    ], BgProSetServices);
    return BgProSetServices;
    var _a;
}());

//# sourceMappingURL=BgProSetServices.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectionServices = /** @class */ (function () {
    function ConnectionServices(http) {
        this.http = http;
    }
    ConnectionServices.prototype.postData = function (info, url) {
        // console.log(url);
        // console.log(info);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // let a=6;
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var body = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpParams */]().set('info', info);
        return this.http.post(url, body.toString(), { headers: headers })
            .map(function (respose) {
            console.log(respose);
            return respose.json();
        });
    };
    ConnectionServices.prototype.postDataOtp = function (credit, url) {
        console.log(credit);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // let a=6;
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var body = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpParams */]().set('user', credit);
        console.log(body.toString());
        return this.http.post(url, body.toString(), { headers: headers })
            .map(function (respose) {
            console.log(respose);
            return respose.json();
        });
    };
    ConnectionServices.prototype.postDataCredir = function (info, credit, url) {
        console.log(info);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // let a=6;
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var body = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpParams */]().set('user', credit).set('info', info);
        // body.set('info',info);
        return this.http.post(url, body.toString(), { headers: headers })
            .map(function (respose) {
            console.log(respose);
            return respose.json();
        });
    };
    ConnectionServices.prototype.postDataFetch = function (user, loged, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // let a=6;
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var body = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpParams */]().set('user', user).set('loged', loged);
        // body.set('info',info);
        return this.http.post(url, body.toString(), { headers: headers })
            .map(function (respose) {
            console.log(respose);
            return respose.json();
        });
    };
    ConnectionServices.prototype.postDataAsked = function (user, loged, info, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // let a=6;
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var body = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpParams */]().set('user', user).set('loged', loged).set('info', info);
        // body.set('info',info);
        return this.http.post(url, body.toString(), { headers: headers })
            .map(function (respose) {
            console.log(respose);
            return respose.json();
        });
    };
    ConnectionServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ConnectionServices);
    return ConnectionServices;
}());

//# sourceMappingURL=ServerConnection.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHeaderServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NativeStorage } from '@ionic-native/native-storage';

// top header request..................
var TopHeaderServices = /** @class */ (function () {
    function TopHeaderServices(con, alertCtrl, storage) {
        this.con = con;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    TopHeaderServices.prototype.notificationLoad = function (user, loged) {
        var url = "http://app.makeurworld.com/home/main/notifi_load";
        return this.con.postDataFetch(user, loged, url);
    };
    TopHeaderServices.prototype.messageLaod = function (user, loged) {
        var url = "http://app.makeurworld.com/home/main/nw_mess_l";
        return this.con.postDataFetch(user, loged, url);
    };
    TopHeaderServices.prototype.requestLoad = function (user, loged) {
        var url = "http://app.makeurworld.com/home/main/meme_req_list";
        return this.con.postDataFetch(user, loged, url);
    };
    TopHeaderServices.prototype.searchLoad = function (user, loged, info) {
        var url = "http://app.makeurworld.com/home/main/search_op";
        return this.con.postDataAsked(user, loged, info, url);
    };
    TopHeaderServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], TopHeaderServices);
    return TopHeaderServices;
    var _a, _b, _c;
}());

//# sourceMappingURL=TopHeaderService.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidEnter = function () {
        this.slides.autoplayDisableOnInteraction = false;
    };
    LandingPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 4) {
            this.slides.stopAutoplay();
            this.slides.lockSwipeToNext(true);
        }
        else if (currentIndex == 1) {
            this.slides.startAutoplay();
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(true);
        }
        else {
            this.slides.startAutoplay();
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
        }
    };
    LandingPage.prototype.goToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], LandingPage.prototype, "slides", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/landing/landing.html"*/'\n<ion-content>\n  <ion-slides\n   pager="true" \n   autoplay=\'3000\' \n   loop=\'true\' \n   speed="1000"\n   (ionSlideDidChange)="slideChanged()">\n    <ion-slide style="background-color: red">\n        <div class=\'slider-wraper\'>\n            <div class=\'slider-wraper-inner\'>\n            </div>\n          </div>\n          <div class=\'top-center slide-center-tag\' padding>\n              <h1>Stay conneted with your buddies</h1>\n            </div>\n    </ion-slide>\n\n\n    <ion-slide style="background-color: green">\n        <div class=\'slider-wraper\'>\n            <div class=\'slider-wraper-inner\'>\n            </div>\n          </div>\n          <div class=\'top-center slide-center-tag\' padding>\n              <h1>Stay conneted with your buddies</h1>\n            </div>\n      </ion-slide>\n\n      \n      <ion-slide style="background-color: yellow">\n          <div class=\'slider-wraper\'>\n              <div class=\'slider-wraper-inner\'>\n              </div>\n            </div>\n            <div class=\'top-center slide-center-tag\' padding>\n                <h1>Stay conneted with your buddies</h1>\n              </div>\n        </ion-slide>\n        <ion-slide style="background-color: pink">\n            <div class=\'slider-wraper\'>\n              <div class=\'slider-wraper-inner\'>\n              </div>\n            </div>\n            <div class=\'top-center slide-center-tag\' padding>\n                <h1>Stay conneted with your buddies afsf sfsdfsdf asdf</h1>\n              </div>\n\n\n            <div class=\'slider-wraper-getStart\'>\n                <div class=\'slider-wraper-getStart-Inner\'>\n                    <button ion-button round outline class=\'getStart-button\' (click)="goToSignIn()">Get Started</button>\n                </div>\n                  \n              \n                \n              </div>\n          </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSegmentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwipeSegmentDirective = /** @class */ (function () {
    function SwipeSegmentDirective(_el) {
        this._el = _el;
        this.tabsList = [];
        this.currentTab = '';
        this.tabChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.el = _el.nativeElement;
    }
    SwipeSegmentDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el);
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', function (event) {
            _this.swipeHandler(event);
        });
    };
    SwipeSegmentDirective.prototype.swipeHandler = function (event) {
        if (event.direction == '2') {
            // move forward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex + 1;
            if (nextIndex < this.tabsList.length) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
        else if (event.direction == '4') {
            // move backward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex - 1;
            if (nextIndex >= 0) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SwipeSegmentDirective.prototype, "tabsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SwipeSegmentDirective.prototype, "currentTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SwipeSegmentDirective.prototype, "tabChanged", void 0);
    SwipeSegmentDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[swipeSegment]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SwipeSegmentDirective);
    return SwipeSegmentDirective;
}());

//# sourceMappingURL=SwipeSegmentDirective.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tab_main_tab__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LandingPage } from '../pages/landing/landing';

// import { SignInPage } from '../pages/sign-in/sign-in';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_tab_main_tab__["a" /* MainTabPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/app/app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AlertServices__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NativeStorage } from '@ionic-native/native-storage';

var SignUpServices = /** @class */ (function () {
    function SignUpServices(con, alertCtrl, storage) {
        this.con = con;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    SignUpServices.prototype.submitWithEmail = function (f_name, l_name, email, password, birthday, gender) {
        var info = {
            'f_name': f_name,
            'l_name': l_name,
            'email': email,
            'password': password,
            'birthday': birthday,
            'gender': gender
        };
        var info1 = JSON.stringify(info);
        var url = "http://app.makeurworld.com/log/login/login";
        return this.con.postData(info1, url);
    };
    SignUpServices.prototype.submitWithPhone = function (f_name, l_name, phone, password, birthday, gender) {
        var info = {
            'f_name': f_name,
            'l_name': l_name,
            'phone': phone,
            'password': password,
            'birthday': birthday,
            'gender': gender
        };
        console.log(info);
        var info1 = JSON.stringify(info);
        console.log(info1);
        var url = "http://app.makeurworld.com/log/login/login_phone";
        return this.con.postData(info1, url);
    };
    SignUpServices.prototype.otpCheckVerification = function () {
        var _this = this;
        console.log("i m here");
        var info = {
            'loged': this.storage.get('loged'),
            'user': this.storage.get('user'),
        };
        var info1 = JSON.stringify(info);
        var url = "http://app.makeurworld.com/log/login/optVerificationCheck";
        this.con.postData(info1, url).subscribe(function (data) {
            if (data['status']) {
                if (parseInt(data[0][0]['verify']) == 1) {
                    _this.storage.set('loged', data[0][0]['loged']);
                    console.log(data[0][0]['loged']);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                _this.alertCtrl.errorALert("Could not connect to server.");
            }
        }, function (error) {
            _this.alertCtrl.errorALert("Could not connect to server.");
        });
    };
    SignUpServices.prototype.otpConformation = function (otp, credit) {
        var info = { 'otp': otp };
        var info1 = JSON.stringify(info);
        console.log(info1);
        var url = "http://app.makeurworld.com/log/login/optVerificationSubmit";
        return this.con.postDataCredir(info1, credit, url);
    };
    SignUpServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], SignUpServices);
    return SignUpServices;
    var _a, _b, _c;
}());

//# sourceMappingURL=SignUpServices.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map
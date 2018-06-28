webpackJsonp([18],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_CreditService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/otp/otp.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar>\n  \n    <button ion-button clear class=\'reomve-signIn\' (click)="goToBack()"> Cancel</button>\n\n    \n  </ion-navbar>\n\n\n  \n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <div>\n  <form #otpForm="ngForm" (ngSubmit)="otp(otpForm)">\n\n      <ion-list>\n   \n      <ion-item  no-lines>\n        \n          <h1 class=\'header-sign-Up\'>Enter your otp.</h1>\n        \n      </ion-item>\n\n     \n\n      \n          <ion-grid>\n              <ion-row >\n                  <ion-col >\n                          <ion-item  no-lines>\n        \n                                  <ion-label color="primary" floating>OTP</ion-label>\n                                  <ion-input type="text" focus-me text-center name="otpNumber" ngModel required></ion-input>\n                              </ion-item>\n                         \n                  </ion-col>\n                \n              </ion-row>\n          </ion-grid>\n        \n      \n\n          \n                          <ion-row>\n                                  <ion-col>\n                                          <ion-item no-lines >\n                                                  <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!otpForm.valid">\n                                                      Submit\n                                                    </button>\n                                              </ion-item>\n                                      </ion-col>\n                                 \n                              </ion-row>\n\n\n                              <ion-row>\n                                <ion-col>\n                                        <ion-item no-lines  text-center>\n                                            <button ion-button clear class=\'resend-Otp\' (click)="goToBack()"> Resend Otp</button>\n                                            </ion-item>\n                                    </ion-col>\n                               \n                            </ion-row>\n\n                         \n     \n      \n      \n     \n      \n\n     \n\n    </ion-list>\n        \n         \n         \n         \n        \n      \n      \n\n  </form>\n</div>\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__["a" /* SignUpServices */],
            __WEBPACK_IMPORTED_MODULE_3__services_CreditService__["a" /* CreditService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__["a" /* AlertServices */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AlertServices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_observeOn__ = __webpack_require__(281);
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
        var url = "http://coolhat/log/login/login_in";
        return this.con.postData(info1, url);
    };
    SignInServices.prototype.submitWithPhone = function (phone, password) {
        var info = {
            'phone': phone,
            'password': password,
        };
        var info1 = JSON.stringify(info);
        console.log(info1);
        var url = "http://coolhat/log/login/login_in_phone";
        return this.con.postData(info1, url);
    };
    SignInServices.prototype.otpCheck = function (data) {
        var url = "http://coolhat/log/login/optVerificationCheck";
        return this.con.postDataOtp(data, url);
    };
    SignInServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */],
            __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SignInServices);
    return SignInServices;
}());

//# sourceMappingURL=SignInServices.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adda',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/adda/adda.html"*/'<!--\n  Generated template for the AddaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>adda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/adda/adda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddaPage);
    return AddaPage;
}());

//# sourceMappingURL=adda.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function CoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoverPage');
    };
    CoverPage.prototype.choseForbg = function () {
    };
    CoverPage.prototype.choseForPr = function () {
    };
    CoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cover',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/cover/cover.html"*/'\n<ion-header>\n\n  <ion-navbar>\n   \n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n \n   <ion-row>\n    <ion-col class=\'profileImgDisplay\'>\n    <div class=\'profileImgDisplayIn\'>\n      <div class=\'coverBgAr\'>\n          <div class=\'coverBgArIn\'>\n        <img src="../../assets/imgs/ter1.jpg">\n        </div>\n        <div class=\'changeBgIcon\'>\n            <button clear ion-botton class=\'changeBgIconB\' (click)="choseForBg()">\n              <ion-icon name=\'camera\' class=\'bgChIcon\'>\n               \n              </ion-icon>\n              \n            </button>\n          </div>\n        \n      </div>\n      <div class=\'coverPrAr\'>\n          <div class=\'coverPrArIN\'>\n            <div class=\'coverPrImgAr\'>\n              <div class=\'coverPrImgArIn\'>\n                  <img src=\'../../assets/imgs/ter2.jpg\' class="coverPrImg">\n              </div>\n\n              <div class=\'changePrIcon\'>\n                  <button clear ion-botton class=\'changePrIconB\' (click)="choseForPr()">\n                    <ion-icon name=\'camera\' class=\'prChIcon\'>\n                     \n                    </ion-icon>\n                    \n                  </button>\n                </div>\n\n            </div>\n            <div class=\'coverPrInfoAr\'>\n                <div class="coverPrInfoArIn">\n                  <div class=\'coverPrNameAr\'>\n                    <div class=\'coverPrNameArIn\'>\n                        Katty Perry\n                    </div>\n                    <div class=\'coverPrSubAr\'>\n                      <div class=\'coverPrSubArIn\'>\n                        Singer\n                      </div>\n                       \n                    </div>\n                      \n                  </div>\n\n                </div>\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n    </ion-col>\n   </ion-row>\n   <ion-row class=\'updateRow1\'>\n     <div class="col col-50 updatebox">\n       <div class=\'updateboxIn0\'>\n            adda\n       </div>\n       </div>\n   \n       <div class="col col-50 updatebox">\n          <div class=\'updateboxIn1\'>\n               adda\n          </div>\n          </div>\n   </ion-row>\n\n   <ion-row class=\'updateRow1\'>\n      <div class="col col-50 updatebox">\n          <div class=\'updateboxIn2\'>\n               adda\n          </div>\n          </div>\n    \n          <div class="col col-50 updatebox">\n              <div class=\'updateboxIn3\'>\n                   adda\n              </div>\n              </div>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/cover/cover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CoverPage);
    return CoverPage;
}());

//# sourceMappingURL=cover.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], ForgetPasswordPage.prototype, "navbar", void 0);
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/forget-password/forget-password.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar>\n      <button ion-button clear class=\'reomve-signIn\' (click)="goToBack()"> Cancel</button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <div>\n  <form #forgetPassword="ngForm" (ngSubmit)="forgetPassword(forgetPassword)">\n\n      <ion-list>\n   \n      <ion-item text-center no-lines>\n        \n          <h1 class=\'header-sign-Up\'>Reset your password through</h1>\n        \n      </ion-item>\n     \n      <ion-item no-lines class=\'normal-padding\' *ngIf="submit.email">  \n          <ion-input type="email" placeholder="Email" text-center class=\'sign-input\'  name="forgetPasswordEmail"\n          ngModel required\n          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" focus-me></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class=\'normal-padding\' *ngIf="!submit.email">  \n        <ion-input type="number" placeholder="Phone number" text-center class=\'sign-input\'  name="forgetPasswordPhone"\n        ngModel\n      required minlength=\'10\' focus-me></ion-input>\n    </ion-item>\n\n   \n      \n      <ion-item no-lines *ngIf="!submit.email">\n          <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!forgetPassword.valid">\n              Forget Password\n         </button>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="submit.email">\n        <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!forgetPassword.valid">\n            Forget Password\n       </button>\n    </ion-item>\n     \n      \n\n     \n\n    </ion-list>\n        \n         \n         \n         \n        \n      \n      \n\n  </form>\n</div>\n\n\n\n</ion-content>\n\n\n<ion-footer>\n    <button ion-button clear class=\'reomve-signIn\' (click)="changeSubmitWithEmail()" *ngIf="!submit.email"> Use Email instead</button>\n    <button ion-button clear class=\'reomve-signIn\' (click)="chanegSubmitWithNumber()" *ngIf="submit.email"> Use Phone Number instead</button>\n</ion-footer>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/forget-password/forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function ImageStorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = ["Photo", "Canvas"];
    }
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], ImageStorePage.prototype, "SwipedTabsSlider", void 0);
    ImageStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-image-store',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/image-store/image-store.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>imageStore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n    <ion-segment  class="SwipedTabs-tabs"  >\n      <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n      [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n        {{tab}}\n      </ion-segment-button>\n    </ion-segment>\n  \n    <!-- here is our dynamic line  "indicator"-->\n    <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n  \n    <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                (ionSlideWillChange)="updateIndicatorPosition()"\n                (ionSlideDidChange)="updateIndicatorPosition()"\n                (pan)="updateIndicatorPosition()"\n                [pager]="false"\n          >\n      <ion-slide>\n        <h1>Image </h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Canvas </h1>\n      </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/image-store/image-store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ImageStorePage);
    return ImageStorePage;
}());

//# sourceMappingURL=image-store.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password_forget_password__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ServerConnection__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_SignInServices__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_SignUpServices__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_AlertServices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__otp_otp__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_CreditService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landing_landing__ = __webpack_require__(65);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], SignInPage.prototype, "navbar", void 0);
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/sign-in/sign-in.html"*/'\n\n<ion-header no-border>\n\n    <ion-navbar>\n        <button ion-button clear class=\'reomve-signIn\' (click)="goToRoot()"> Cancel</button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n<ion-content padding>\n  \n\n  \n    <div>\n    <form #signInForm="ngForm" (ngSubmit)="signIn(signInForm)">\n\n        <ion-list>\n     \n        <ion-item  no-lines>\n          \n            <h1 class=\'header-sign-Up\'>Log in to your World</h1>\n          \n        </ion-item>\n        <ion-item no-lines >\n          \n            <p class=\'sign-Up-starter\'>New User? <span (click)="goToSignUp()">Sign Up</span></p>\n          \n        </ion-item>\n        <ion-item no-lines class=\'normal-padding\' *ngIf="email">\n          \n           \n            <ion-input type="email"\n             placeholder="Email"\n              text-center class=\'sign-input\'\n              name="signInEmail"\n              ngModel required\n              pattern="^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$" focus-me></ion-input>\n          \n        </ion-item>\n\n        <ion-item no-lines class=\'normal-padding\' *ngIf="!email">\n          \n            <ion-input type="number" \n            placeholder="Phone number" \n            text-center class=\'sign-input\'\n            name="signInPhone"\n              ngModel\n            required maxlength=\'10\' focus-me></ion-input>\n          \n        </ion-item>\n\n        <ion-item no-lines class=\'normal-padding\'>\n          \n           \n            <ion-input type="password"\n             placeholder="Password"\n              text-center class=\'sign-input\'\n              name="signInPassword"\n              ngModel\n            required  minlength=\'7\'></ion-input>\n            \n           \n          \n        </ion-item>\n\n        <ion-item no-lines text-right>\n          \n            <button ion-button clear class=\'reomve-signIn\' (click)="goToForgetPassword()">Forget Password</button>\n          \n        </ion-item>\n        \n        <ion-item no-lines *ngIf="!email">\n            <button type="submit"\n             ion-button block round \n              class=\'sign-button\'\n              [disabled]="!signInForm.valid">\n                Log In\n              </button>\n        </ion-item>\n\n        <ion-item no-lines *ngIf="email">\n            <button type="submit"\n             ion-button block round \n              class=\'sign-button\'\n              [disabled]="!signInForm.valid">\n                Log In\n              </button>\n        </ion-item>\n       \n        \n\n       \n\n      </ion-list>\n          \n           \n           \n           \n          \n        \n        \n\n    </form>\n  </div>\n\n  \n\n</ion-content>\n\n\n<ion-footer>\n    <button ion-button clear class=\'reomve-signIn\' (click)="changeSubmitWithEmail()" *ngIf="!email"> Use Email instead</button>\n    <button ion-button clear class=\'reomve-signIn\' (click)="chanegSubmitWithNumber()" *ngIf="email"> Use Phone Number instead</button>\n</ion-footer>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Message</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_tab_store_tab__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viral_tab_viral_tab__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adda_adda__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__musicplayer_musicplayer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cover_cover__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_message__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__request_request__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notification_notification__ = __webpack_require__(175);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-tab',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/main-tab/main-tab.html"*/'<ion-header class=\'mainHeaderTop\'>\n\n  <ion-navbar>\n      <ion-grid>\n          <ion-row>\n              <ion-col >MUW</ion-col>\n              <ion-col ></ion-col>\n              <ion-col ></ion-col>\n              <ion-col ></ion-col>\n             \n              <ion-col ><ion-icon name="custom-icon6" class=\'iconHeader\' (click)="goToSearch()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="custom-icon9" class=\'iconHeader\' (click)="goToMessage()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="custom-icon8" class=\'iconHeader\' (click)="goToRequest()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="custom-icon7" class=\'iconHeader\' (click)="goToNotification()"></ion-icon></ion-col>\n              <ion-col ><ion-icon name="menu" class=\'iconHeader\'></ion-icon></ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-tabs>\n  <ion-tab [root]="cover" tabIcon="custom-icon1" tabTitle="Cover"></ion-tab>\n  <ion-tab [root]="store" tabIcon="custom-icon4" tabTitle="Store"></ion-tab>\n  <ion-tab [root]="viral" tabIcon="custom-icon3" tabTitle="Viral"></ion-tab>\n  <ion-tab [root]="adda" tabIcon="custom-icon5" tabTitle="Adda"></ion-tab>\n  <ion-tab [root]="musicplayer" tabIcon="custom-icon2" tabTitle="Mu"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/main-tab/main-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MainTabPage);
    return MainTabPage;
}());

//# sourceMappingURL=main-tab.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_store_image_store__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_store_music_store__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_store_video_store__ = __webpack_require__(167);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store-tab',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/store-tab/store-tab.html"*/'\n\n\n<ion-content >\n    <ion-tabs tabsPlacement=\'top\'>\n  \n        <ion-tab [root]="imageStore" tabTitle="Image"></ion-tab>\n        <ion-tab [root]="musicStore"  tabTitle="Music"></ion-tab>\n        <ion-tab [root]="videoStore" tabTitle="Video"></ion-tab>\n      </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/store-tab/store-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StoreTabPage);
    return StoreTabPage;
}());

//# sourceMappingURL=store-tab.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    VideoStorePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], VideoStorePage.prototype, "SwipedTabsSlider", void 0);
    VideoStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-store',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/video-store/video-store.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>videoStore</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content >\n  \n      <ion-segment  class="SwipedTabs-tabs"  >\n        <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n        [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n          {{tab}}\n        </ion-segment-button>\n      </ion-segment>\n    \n      <!-- here is our dynamic line  "indicator"-->\n      <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n    \n      <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                  (ionSlideWillChange)="updateIndicatorPosition()"\n                  (ionSlideDidChange)="updateIndicatorPosition()"\n                  (pan)="updateIndicatorPosition()"\n                  [pager]="false"\n            >\n        <ion-slide>\n          <h1>Video Play </h1>\n        </ion-slide>\n        <ion-slide>\n          <h1>Favourite</h1>\n        </ion-slide>\n      </ion-slides>\n  </ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/video-store/video-store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], VideoStorePage);
    return VideoStorePage;
}());

//# sourceMappingURL=video-store.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viral_image_viral_image__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viral_music_viral_music__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viral_video_viral_video__ = __webpack_require__(171);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viral-tab',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-tab/viral-tab.html"*/'\n<ion-content>\n\n    <ion-tabs tabsPlacement="top">\n        <ion-tab [root]="viralImage" tabTitle="Image"></ion-tab>\n        \n        <ion-tab [root]="viralMusic" tabTitle="Music"></ion-tab>\n        <ion-tab [root]="viralVideo" tabTitle="Video"></ion-tab>\n      </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-tab/viral-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViralTabPage);
    return ViralTabPage;
}());

//# sourceMappingURL=viral-tab.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viral-image',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-image/viral-image.html"*/'<!--\n  Generated template for the ViralImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viralImage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-image/viral-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViralImagePage);
    return ViralImagePage;
}());

//# sourceMappingURL=viral-image.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralMusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viral-music',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-music/viral-music.html"*/'<!--\n  Generated template for the ViralMusicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viralMusic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-music/viral-music.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViralMusicPage);
    return ViralMusicPage;
}());

//# sourceMappingURL=viral-music.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViralVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viral-video',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/viral-video/viral-video.html"*/'<!--\n  Generated template for the ViralVideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viralVideo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/viral-video/viral-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViralVideoPage);
    return ViralVideoPage;
}());

//# sourceMappingURL=viral-video.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicplayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musicplayer',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/musicplayer/musicplayer.html"*/'<!--\n  Generated template for the MusicplayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>musicplayer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/musicplayer/musicplayer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MusicplayerPage);
    return MusicplayerPage;
}());

//# sourceMappingURL=musicplayer.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.onInput = function (event) {
        console.log("ok");
    };
    SearchPage.prototype.onCancel = function (event) {
        console.log("ok");
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/search/search.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)" class=\'searchbarRadius\'></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/request/request.html"*/'<!--\n  Generated template for the RequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-cneter>Notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adda/adda.module": [
		704,
		17
	],
	"../pages/cover/cover.module": [
		705,
		16
	],
	"../pages/forget-password/forget-password.module": [
		706,
		15
	],
	"../pages/image-store/image-store.module": [
		707,
		14
	],
	"../pages/landing/landing.module": [
		708,
		13
	],
	"../pages/main-tab/main-tab.module": [
		710,
		12
	],
	"../pages/message/message.module": [
		709,
		11
	],
	"../pages/musicplayer/musicplayer.module": [
		711,
		10
	],
	"../pages/notification/notification.module": [
		712,
		9
	],
	"../pages/request/request.module": [
		713,
		8
	],
	"../pages/search/search.module": [
		714,
		7
	],
	"../pages/sign-in/sign-in.module": [
		715,
		6
	],
	"../pages/store-tab/store-tab.module": [
		716,
		5
	],
	"../pages/video-store/video-store.module": [
		717,
		4
	],
	"../pages/viral-image/viral-image.module": [
		718,
		3
	],
	"../pages/viral-music/viral-music.module": [
		719,
		2
	],
	"../pages/viral-tab/viral-tab.module": [
		720,
		1
	],
	"../pages/viral-video/viral-video.module": [
		721,
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
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_SignUpServices__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_otp__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertServices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_CreditService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_SignInServices__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_landing__ = __webpack_require__(65);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], SignUpPage.prototype, "navbar", void 0);
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/sign-up/sign-up.html"*/'\n\n<ion-header no-border>\n\n    <ion-navbar>\n        <button ion-button clear class=\'reomve-signIn\' (click)="goToBack()"> Cancel</button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n<ion-content padding>\n  \n\n  \n    <div>\n    <form #signUpForm="ngForm" (ngSubmit)="signUp(signUpForm)">\n\n        <ion-list>\n     \n        <ion-item  no-lines>\n          \n            <h1 class=\'header-sign-Up\'>Create your world.</h1>\n          \n        </ion-item>\n\n       \n\n        \n            <ion-grid>\n                <ion-row >\n                    <ion-col width-40>\n                            <ion-item  no-lines>\n          \n                                    <ion-label color="primary" floating>First Name</ion-label>\n                                    <ion-input type="text" focus-me text-center name="signUpFirstName" ngModel required></ion-input>\n                                    \n                                   \n                                  \n                                </ion-item>\n                           \n                    </ion-col>\n                    <ion-col width-40>\n                            <ion-item  no-lines>\n          \n                                    <ion-label color="primary" floating>Last Name</ion-label>\n                                    <ion-input type="text" text-center name="signUpLastName" ngModel required></ion-input>\n                                    \n                                   \n                                  \n                                </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n          \n            \n            \n           \n          \n        \n\n            <ion-row *ngIf="!email">\n                    <ion-col>\n                            <ion-item no-lines >\n          \n                                    <ion-label color="primary" floating>Phone Number</ion-label>\n                                    <ion-input type="tel" text-center name="signUpPhoneNumber" ngModel required maxlength="10"></ion-input>\n\n                                </ion-item>\n                            </ion-col>\n            </ion-row>\n            <ion-row  *ngIf="email">\n                                <ion-col>\n\n                               \n\n                                <ion-item no-lines>\n          \n                                        <ion-label color="primary" floating>Email</ion-label>\n                                        <ion-input type="email" text-center name="signUpEmail" ngModel\n                                         required pattern="^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$"></ion-input>\n    \n                                 </ion-item>\n\n                        </ion-col>\n                   \n                </ion-row>\n        \n       \n                <ion-row>\n                        <ion-col>\n                                <ion-item no-lines>\n                                       \n                                                        \n                                        <ion-label color="primary" floating>Password</ion-label>\n                                        <ion-input type="password" text-center name="signUpPassword" ngModel required minlength="7" ></ion-input>\n                                        <ion-note item-end class=\'important-note\'>\n                                                        At lest 7 characters required\n                                                      </ion-note>\n                                        \n    \n                                    </ion-item>\n                            </ion-col>\n                       \n                    </ion-row>\n            \n       \n\n                    \n                    <ion-row >\n                            <ion-col>\n                                    <ion-item >\n                  \n                                           \n                                            <ion-label color="primary" floating >Birth Date</ion-label>\n                                            <ion-datetime displayFormat="MM/DD/YYYY" name="signUpBirthDay" ngModel required>\n                                            </ion-datetime>\n                \n        \n                                        </ion-item>\n                                </ion-col>\n                           \n                        </ion-row>\n\n                        \n      \n\n                        <ion-row >\n                                <ion-col>\n                                        <ion-item >\n                                                <ion-label color="primary" floating>Gender</ion-label>\n                                                <ion-select  no-lines name="signUpGender" ngModel required >\n                                                <ion-option\n                                                    *ngFor="let option of selectOptions"\n                                                    [value]="option">{{ option }}</ion-option>\n                                                </ion-select>\n            \n                                            </ion-item>\n                                    </ion-col>\n                               \n                            </ion-row>\n\n\n        \n\n            \n                            <ion-row *ngIf="!email">\n                                    <ion-col>\n                                            <ion-item no-lines >\n                                                    <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!signUpForm.valid">\n                                                        Sign Up\n                                                      </button>\n                                                </ion-item>\n                                        </ion-col>\n                                   \n                                </ion-row>\n\n                                <ion-row *ngIf="email">\n                                        <ion-col>\n                                                <ion-item no-lines >\n                                                        <button type="submit" ion-button block round  class=\'sign-button\' [disabled]="!signUpForm.valid">\n                                                            Sign Up\n                                                          </button>\n                                                    </ion-item>\n                                            </ion-col>\n                                       \n                                    </ion-row>\n    \n       \n        \n        \n       \n        \n\n       \n\n      </ion-list>\n          \n           \n           \n           \n          \n        \n        \n\n    </form>\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer>\n        <button ion-button clear class=\'reomve-signIn\' (click)="changeSubmitWithEmail()" *ngIf="!email" > Use Email instead</button>\n        <button ion-button clear class=\'reomve-signIn\' (click)="chanegSubmitWithNumber()" *ngIf="email"> Use Phone Number instead</button>\n</ion-footer>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        this.category = 'Music_Play';
        this.categories = ['Music_Play', 'Playlist'];
    }
    MusicStorePage.prototype.onTabChanged = function (tabName) {
        this.category = tabName;
    };
    MusicStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-music-store',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/music-store/music-store.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>musicStore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n      <ion-segment [(ngModel)]="category">\n        <ion-segment-button value="Music_Play">\n          Music Play\n        </ion-segment-button>\n        <ion-segment-button value="Favourite">\n          Favourite\n        </ion-segment-button>\n      </ion-segment>\n    <div [ngSwitch]="category" swipeSegment [tabsList]="categories" [(currentTab)]="category" (tabChanged)="onTabChanged($event)" class="swipe-area">\n      <ion-list *ngSwitchCase="\'Music_Play\'">\n        <ion-item>\n          Music PLay\n        </ion-item>\n      </ion-list>\n  \n      <ion-list *ngSwitchCase="\'Favourite\'">\n        <ion-item>\n          Favourite\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-content>'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/music-store/music-store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MusicStorePage);
    return MusicStorePage;
}());

//# sourceMappingURL=music-store.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_tab_main_tab__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_store_tab_store_tab__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_adda_adda__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_musicplayer_musicplayer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viral_tab_viral_tab__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_image_store_image_store__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_video_store_video_store__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_viral_image_viral_image__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_viral_music_viral_music__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viral_video_viral_video__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cover_cover__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_SwipeSegmentDirective__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_music_store_music_store__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_landing_landing__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sign_in_sign_in__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forget_password_forget_password__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sign_up_sign_up__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_SignInServices__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_SignUpServices__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_ServerConnection__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_AlertServices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_native_storage__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_otp_otp__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_CreditService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_message_message__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_notification_notification__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_request_request__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_search_search__ = __webpack_require__(173);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_store_tab_store_tab__["a" /* StoreTabPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_adda_adda__["a" /* AddaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_musicplayer_musicplayer__["a" /* MusicplayerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viral_tab_viral_tab__["a" /* ViralTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_image_store_image_store__["a" /* ImageStorePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_music_store_music_store__["a" /* MusicStorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_video_store_video_store__["a" /* VideoStorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_viral_image_viral_image__["a" /* ViralImagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_viral_music_viral_music__["a" /* ViralMusicPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viral_video_viral_video__["a" /* ViralVideoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cover_cover__["a" /* CoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__directives_SwipeSegmentDirective__["a" /* SwipeSegmentDirective */],
                __WEBPACK_IMPORTED_MODULE_19__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adda/adda.module#AddaPageModule', name: 'AddaPage', segment: 'adda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cover/cover.module#CoverPageModule', name: 'CoverPage', segment: 'cover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-store/image-store.module#ImageStorePageModule', name: 'ImageStorePage', segment: 'image-store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-tab/main-tab.module#MainTabPageModule', name: 'MainTabPage', segment: 'main-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musicplayer/musicplayer.module#MusicplayerPageModule', name: 'MusicplayerPage', segment: 'musicplayer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-tab/store-tab.module#StoreTabPageModule', name: 'StoreTabPage', segment: 'store-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-store/video-store.module#VideoStorePageModule', name: 'VideoStorePage', segment: 'video-store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-image/viral-image.module#ViralImagePageModule', name: 'ViralImagePage', segment: 'viral-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-music/viral-music.module#ViralMusicPageModule', name: 'ViralMusicPage', segment: 'viral-music', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-tab/viral-tab.module#ViralTabPageModule', name: 'ViralTabPage', segment: 'viral-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viral-video/viral-video.module#ViralVideoPageModule', name: 'ViralVideoPage', segment: 'viral-video', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_main_tab_main_tab__["a" /* MainTabPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_store_tab_store_tab__["a" /* StoreTabPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_adda_adda__["a" /* AddaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_musicplayer_musicplayer__["a" /* MusicplayerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viral_tab_viral_tab__["a" /* ViralTabPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_image_store_image_store__["a" /* ImageStorePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_music_store_music_store__["a" /* MusicStorePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_video_store_video_store__["a" /* VideoStorePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_viral_image_viral_image__["a" /* ViralImagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_viral_music_viral_music__["a" /* ViralMusicPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viral_video_viral_video__["a" /* ViralVideoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cover_cover__["a" /* CoverPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__services_SignInServices__["a" /* SignInServices */],
                __WEBPACK_IMPORTED_MODULE_24__services_SignUpServices__["a" /* SignUpServices */],
                __WEBPACK_IMPORTED_MODULE_27__services_ServerConnection__["a" /* ConnectionServices */],
                __WEBPACK_IMPORTED_MODULE_28__services_AlertServices__["a" /* AlertServices */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_32__services_CreditService__["a" /* CreditService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertServices);
    return AlertServices;
}());

//# sourceMappingURL=AlertServices.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(163);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], LandingPage.prototype, "slides", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/pages/landing/landing.html"*/'\n<ion-content>\n  <ion-slides\n   pager="true" \n   autoplay=\'3000\' \n   loop=\'true\' \n   speed="1000"\n   (ionSlideDidChange)="slideChanged()">\n    <ion-slide style="background-color: red">\n        <div class=\'slider-wraper\'>\n            <div class=\'slider-wraper-inner\'>\n            </div>\n          </div>\n          <div class=\'top-center slide-center-tag\' padding>\n              <h1>Stay conneted with your buddies</h1>\n            </div>\n    </ion-slide>\n\n\n    <ion-slide style="background-color: green">\n        <div class=\'slider-wraper\'>\n            <div class=\'slider-wraper-inner\'>\n            </div>\n          </div>\n          <div class=\'top-center slide-center-tag\' padding>\n              <h1>Stay conneted with your buddies</h1>\n            </div>\n      </ion-slide>\n\n      \n      <ion-slide style="background-color: yellow">\n          <div class=\'slider-wraper\'>\n              <div class=\'slider-wraper-inner\'>\n              </div>\n            </div>\n            <div class=\'top-center slide-center-tag\' padding>\n                <h1>Stay conneted with your buddies</h1>\n              </div>\n        </ion-slide>\n        <ion-slide style="background-color: pink">\n            <div class=\'slider-wraper\'>\n              <div class=\'slider-wraper-inner\'>\n              </div>\n            </div>\n            <div class=\'top-center slide-center-tag\' padding>\n                <h1>Stay conneted with your buddies afsf sfsdfsdf asdf</h1>\n              </div>\n\n\n            <div class=\'slider-wraper-getStart\'>\n                <div class=\'slider-wraper-getStart-Inner\'>\n                    <button ion-button round outline class=\'getStart-button\' (click)="goToSignIn()">Get Started</button>\n                </div>\n                  \n              \n                \n              </div>\n          </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSegmentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(366);
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
        this.tabChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SwipeSegmentDirective.prototype, "tabsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SwipeSegmentDirective.prototype, "currentTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SwipeSegmentDirective.prototype, "tabChanged", void 0);
    SwipeSegmentDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[swipeSegment]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SwipeSegmentDirective);
    return SwipeSegmentDirective;
}());

//# sourceMappingURL=SwipeSegmentDirective.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_tab_main_tab__ = __webpack_require__(165);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/coolhat/hybride/makeurworld/src/app/app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/coolhat/hybride/makeurworld/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServerConnection__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AlertServices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
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
        var url = "http://coolhat/log/login/login";
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
        var url = "http://coolhat/log/login/login_phone";
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
        var url = "http://coolhat/log/login/optVerificationCheck";
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
        var url = "http://coolhat/log/login/optVerificationSubmit";
        return this.con.postDataCredir(info1, credit, url);
    };
    SignUpServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ServerConnection__["a" /* ConnectionServices */],
            __WEBPACK_IMPORTED_MODULE_2__AlertServices__["a" /* AlertServices */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SignUpServices);
    return SignUpServices;
}());

//# sourceMappingURL=SignUpServices.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(329);
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
    ConnectionServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ConnectionServices);
    return ConnectionServices;
}());

//# sourceMappingURL=ServerConnection.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(133);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CreditService);
    return CreditService;
}());

//# sourceMappingURL=CreditService.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map
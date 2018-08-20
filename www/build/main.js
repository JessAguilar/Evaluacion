webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraficaPage = /** @class */ (function () {
    function GraficaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GraficaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraficaPage');
    };
    GraficaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grafica',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\grafica\grafica.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>grafica</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\grafica\grafica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GraficaPage);
    return GraficaPage;
}());

//# sourceMappingURL=grafica.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/grafica/grafica.module": [
		289,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.model = {};
        this.isEditing = false;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.loadData();
    }
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.getAllDocuments("messages").then(function (e) {
            _this.messages = e;
        });
    };
    HomePage.prototype.addMessage = function () {
        var _this = this;
        if (!this.isEditing) {
            this.addDocument("messages", this.model).then(function () {
                _this.loadData(); //refresh!
            });
        }
        else {
            this.updateDocument("messages", this.model.$key, this.model).then(function () {
                _this.loadData(); //refresh!
            });
        }
        this.isEditing = false;
        //Borra de
        this.model.title = '';
        this.model.text = '';
        this.model.imagen = '';
    };
    HomePage.prototype.updateMessage = function (obj) {
        this.model = obj;
        this.isEditing = true;
    };
    HomePage.prototype.deleteMessage = function (key) {
        var _this = this;
        this.deleteDocument("messages", key).then(function () {
            _this.loadData(); //refresh!
            _this.isEditing = false;
        });
    };
    //CRUD operation methods------------------------------------------------------------------------------------------
    HomePage.prototype.getAllDocuments = function (collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collection)
                .get()
                .then(function (querySnapshot) {
                var arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id;
                    console.log(obj);
                    arr.push(obj);
                });
                if (arr.length > 0) {
                    console.log("Data del documento. soy un logger, ignorenme:", arr);
                    resolve(arr);
                }
                else {
                    console.log("No hay tal documento!");
                    resolve(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    HomePage.prototype.deleteDocument = function (collectionName, docID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    HomePage.prototype.addDocument = function (collectionName, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collectionName).add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    HomePage.prototype.updateDocument = function (collectionName, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    HomePage.prototype.Iniciar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Instrajram ©</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div align="center">\n      <img height="70%" width="70%" src="http://www.webtus.net/wp-content/uploads/2018/06/logo-instagram-tv.png">\n      <ion-label>Usuario</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="model.usuario"></ion-input>\n      <ion-label>Contraseña</ion-label>\n      <ion-input type="password" value="" [(ngModel)]="model.clave"></ion-input>\n      <button ion-button name="button" (click)="Iniciar()">Ingresar</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grafica_grafica__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__grafica_grafica__["a" /* GraficaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab2Root" tabTitle="Publicaciones" tabIcon="md-color-palette"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Graficos" tabIcon="ios-stats-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Acerca de mi" tabIcon="ios-attach"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.model = {};
        this.model1 = {};
        this.model2 = {};
        this.isEditing = false;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
        this.loadData();
    }
    AboutPage.prototype.loadData = function () {
        var _this = this;
        this.getAllDocuments("messages").then(function (e) {
            _this.messages = e;
        });
        this.getAllDocuments("messages1").then(function (e) {
            _this.messages1 = e;
        });
        this.getAllDocuments("messages2").then(function (e) {
            _this.messages2 = e;
        });
    };
    AboutPage.prototype.addMessage = function () {
        var _this = this;
        if (!this.isEditing) {
            this.addDocument("messages", this.model).then(function () {
                _this.loadData(); //refresh!
            });
        }
        else {
            this.updateDocument("messages", this.model.$key, this.model).then(function () {
                _this.loadData(); //refresh!
            });
        }
        this.isEditing = false;
        //Borra de
        this.model.coment = '';
    };
    AboutPage.prototype.addMessage1 = function () {
        var _this = this;
        if (!this.isEditing) {
            this.addDocument("messages1", this.model1).then(function () {
                _this.loadData(); //refresh!
            });
        }
        else {
            this.updateDocument("messages1", this.model1.$key, this.model1).then(function () {
                _this.loadData(); //refresh!
            });
        }
        this.isEditing = false;
        //Borra de
        this.model1.coment1 = '';
    };
    AboutPage.prototype.addMessage2 = function () {
        var _this = this;
        if (!this.isEditing) {
            this.addDocument("messages2", this.model2).then(function () {
                _this.loadData(); //refresh!
            });
        }
        else {
            this.updateDocument("messages2", this.model2.$key, this.model2).then(function () {
                _this.loadData(); //refresh!
            });
        }
        this.isEditing = false;
        //Borra de
        this.model2.coment2 = '';
    };
    //CRUD operation methods------------------------------------------------------------------------------------------
    AboutPage.prototype.getAllDocuments = function (collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collection)
                .get()
                .then(function (querySnapshot) {
                var arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id;
                    console.log(obj);
                    arr.push(obj);
                });
                if (arr.length > 0) {
                    console.log("Data del documento. soy un logger, ignorenme:", arr);
                    resolve(arr);
                }
                else {
                    console.log("No hay tal documento!");
                    resolve(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    AboutPage.prototype.deleteDocument = function (collectionName, docID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    AboutPage.prototype.addDocument = function (collectionName, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.collection(collectionName).add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    AboutPage.prototype.updateDocument = function (collectionName, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div align="center"><h2>Publicaciones</h2></div>\n  <ion-card>\n  <ion-card-content>\n    <ion-card-title>\n      El perro mas hermoso del Mundo\n    </ion-card-title>\n      <img src="https://lh3.googleusercontent.com/w1evS_QFA_H82YsxnJI66QqGJXZWFtJgR1yUjFUz-RfghjS8Md6k3T_3ANBAinBMdrV_853NwjdEWp70rhn-VjMTOQImiZtMvAqw4c6L4eiEm7R4MbmBqCLKwwlUCJsrUiCXKQp8HugWs4MiEh1TVykl-XjcoGc2JslUKnGHZcU0mA3h3fPXeZy2vvphcyyt37LnyRNLhCLnZKTa6zEFI6OBt70LYHxjMbLhRnLZDTD-DTUNtj1_EyScHL4GbmCPxNg4s_1lyXGobOadLTX_5Rz7-c_LQoNqdoCyTrBKrxlVlrwDvYVmxGVv46DIPTgFBuKC9RWca_9_SPjl-EbowNEK-YosXBMbspfYoNcDft01avh2Qw73kCwKrmURPr5hMH8dsy2F72FfC7nYo8offLauS8PZ2n3OKhQ497-xpr_Nen1XPoWeZArwO1hKnXrurI0M1KqDpa-56tONcZj4bETuTNfDnDhPq9UVNQH_dVmElqljG3Caztbbr6Gbc4YJi6Ya7g07vS6qkDgqOg5uX4aeG3WS8qFt4QWYk_Aq3tpLbAU7u9dCTsN8Ou-0Ec0SnhEL7I2K4DRddYRysKXtCWSKUx7XPU1-bSeBk5c=w496-h662-no">\n    <h3>\n      El es Junior es mi perro y pues lo quiero mucho es como mi hijo, justo en este momento mientras programo el esta en mi falda durmiendo escuchando Queen x3\n    </h3>\n  </ion-card-content>\n  <ion-item>\n    <ion-label floating>Comentar :</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="model.coment"></ion-input>\n  </ion-item>\n  <div align="right"><button type="button" (click)="addMessage()" ion-button >Subir Datos</button></div>\n  <ion-item-sliding *ngFor="let message of messages">\n        <ion-item>\n              <h3>\n                {{message.coment}}\n              </h3>\n        </ion-item>\n  </ion-item-sliding>\n</ion-card>\n<ion-card>\n<ion-card-content>\n  <ion-card-title>\n    El es TownGameplay\n  </ion-card-title>\n    <img src="http://www.cuantogana.org/wp-content/uploads/2016/12/iTownGamePlay.png">\n  <h3>\n  Es un Youtuber que encontre por FNAF pero luego vi que era muy divertido y ademas era compositor sus canciones me encantan\n  </h3>\n</ion-card-content>\n<ion-item>\n  <ion-label floating>Comentar :</ion-label>\n  <ion-input type="text" value="" [(ngModel)]="model.coment1"></ion-input>\n</ion-item>\n<div align="right"><button type="button" (click)="addMessage1()" ion-button >Subir Datos</button></div>\n<ion-item-sliding *ngFor="let message of messages1">\n      <ion-item>\n            <h3>\n              {{message1.coment1}}\n            </h3>\n      </ion-item>\n</ion-item-sliding>\n</ion-card>\n<ion-card>\n<ion-card-content>\n  <ion-card-title>\n    Tus labios\n  </ion-card-title>\n  <video src="https://www.youtube.com/watch?v=Flkb-2Q0mRo"></video>\n  <h3>\n    No dejaba de escucharla su letra me gustaba mucho y era verdad no podia dejar de pensar en sus labios\n  </h3>\n</ion-card-content>\n<ion-item>\n  <ion-label floating>Comentar :</ion-label>\n  <ion-input type="text" value="" [(ngModel)]="model.coment2"></ion-input>\n</ion-item>\n<div align="right"><button type="button" (click)="addMessage2()" ion-button >Subir Datos</button></div>\n<ion-item-sliding *ngFor="let message of messages2">\n      <ion-item>\n            <h3>\n              {{message2.coment2}}\n            </h3>\n      </ion-item>\n</ion-item-sliding>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], AboutPage);
    return AboutPage;
    var _a;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_grafica_grafica__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_firestore__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var config = {
    apiKey: "AIzaSyBdeZqiHy2dWyfpf5TJebwdijlL9KkfFM0",
    authDomain: "nuevo-en-esto.firebaseapp.com",
    databaseURL: "https://nuevo-en-esto.firebaseio.com",
    projectId: "nuevo-en-esto",
    storageBucket: "nuevo-en-esto.appspot.com",
    messagingSenderId: "647502098053"
};
__WEBPACK_IMPORTED_MODULE_11_firebase__["initializeApp"](config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_grafica_grafica__["a" /* GraficaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/grafica/grafica.module#GraficaPageModule', name: 'GraficaPage', segment: 'grafica', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_grafica_grafica__["a" /* GraficaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\evaluacion\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map
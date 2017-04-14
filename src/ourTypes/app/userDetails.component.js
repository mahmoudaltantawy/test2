"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_services_1 = require("./app.services");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var UserDetailsComponent = (function () {
    function UserDetailsComponent(appservices, route) {
        this.appservices = appservices;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.appservices.getSpecificUser(+params['id'])
                .subscribe(function (data) { return _this.user = data; });
        });
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'User-detail',
        template: "\n   <div *ngIf=\"user\"> {{user|json}}</div>\n  ",
        providers: [app_services_1.Appservices]
    }),
    __metadata("design:paramtypes", [app_services_1.Appservices,
        router_1.ActivatedRoute])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=userDetails.component.js.map
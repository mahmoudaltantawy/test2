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
require("rxjs/add/operator/take");
var UsersComponent = (function () {
    function UsersComponent(__appserv) {
        var _this = this;
        this.__appserv = __appserv;
        this.changed = new core_1.EventEmitter();
        this.__appserv
            .getPosts()
            .subscribe(function (data) {
            _this.posts = data;
            _this.selectedUser = data[0];
        });
    }
    UsersComponent.prototype.selectUser = function (selectedUser) {
        var _this = this;
        this.__appserv
            .getUser(selectedUser.login)
            .subscribe(function (data) {
            _this.selectedUser = data;
            _this.changed.emit(selectedUser);
        });
    };
    return UsersComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UsersComponent.prototype, "changed", void 0);
UsersComponent = __decorate([
    core_1.Component({
        selector: 'Users-app',
        template: "\n     <div class=\"row\">\n       <h2> Users </h2>\n            <ul class=\"col-md-3 users list-unstyled\">\n                <li *ngFor= \"let p of posts\" (click)=\"selectUser(p)\">\n                     {{p.login}}\n                </li>\n            </ul>\n            <div class=\"col-md-9\">\n               <app-user [user]=\"selectedUser\"></app-user>\n            </div>\n    </div>\n        \n  ",
        providers: [app_services_1.Appservices]
    }),
    __metadata("design:paramtypes", [app_services_1.Appservices])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map
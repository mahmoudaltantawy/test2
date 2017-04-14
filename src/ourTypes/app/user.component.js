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
var UserComponent = (function () {
    function UserComponent() {
    }
    return UserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserComponent.prototype, "user", void 0);
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        template: "\n     <div class=\"row\" *ngIf=\"user\">\n        <div class=\"col-md-3\"></div>\n        <ul class=\"col-md-9 list-unstyled  user__info\">\n          \n           <li class=\"user__avatar\"> \n                <img src=\"https://avatars3.githubusercontent.com/u/{{user.id|json}}?v=3\" class=\"img-thumbnail\"/>\n           </li>\n           <li> {{user.login}}</li>\n           <li *ngIf=\"user.bio\" class=\"user__bio\"> {{user.bio}}</li>\n           <li *ngIf=\"!user.bio\"  class=\"user__bio\"> no bio</li>\n           <li><a href=\"/users/{{user.id}}\" class=\"load__info\">More Information </a></li>\n        </ul>\n      \n    </div>\n  ",
    })
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map
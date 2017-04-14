"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'Home-app',
        template: "<p class=\"text-center home__content\"> Lorem Ipsum is simply dummy text of the printing and \n  typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n   ever since the 1500s, when an unknown printer took a galley of type and \n   scrambled it to make a type specimen book. It has survived not only five centuries, \n   but also the leap into electronic typesetting, remaining essentially unchanged. \n   It was popularised in the 1960s with the release of Letraset sheets containing\n    Lorem Ipsum passages, and more recently with desktop publishing software like \n    Aldus PageMaker including versions of Lorem Ipsum</p>",
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
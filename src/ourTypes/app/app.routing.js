"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var users_component_1 = require("./users.component");
var user_component_1 = require("./user.component");
var userDetails_component_1 = require("./userDetails.component");
//export class AppRouting{
var app_routes = [
    {
        path: 'home', component: home_component_1.HomeComponent, data: { title: 'home' }
    },
    {
        path: 'about', component: about_component_1.AboutComponent, data: { title: 'About' }
    },
    {
        path: 'users', component: users_component_1.UsersComponent, data: { title: 'Users' }
    },
    {
        path: 'users/:id', component: userDetails_component_1.UserDetailsComponent, data: { title: 'Users' }
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/home'
    },
];
exports.routConfig = router_1.RouterModule.forRoot(app_routes);
exports.Components = [
    home_component_1.HomeComponent, about_component_1.AboutComponent, users_component_1.UsersComponent, user_component_1.UserComponent, userDetails_component_1.UserDetailsComponent
];
//}
//# sourceMappingURL=app.routing.js.map
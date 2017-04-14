import { Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './userDetails.component';


//export class AppRouting{
 const app_routes: Routes = [
  {
    path: 'home', component: HomeComponent, data: { title: 'home' }
  },

  {
    path: 'about', component: AboutComponent, data: { title: 'About' }
  },

  {
    path: 'users', component: UsersComponent, data: { title: 'Users' }
  },
  {
    path: 'users/:id', component: UserDetailsComponent, data: { title: 'Users' }
  },

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: '**', redirectTo: '/home'
  },


];

export const routConfig=RouterModule.forRoot(
    app_routes
    )

export const Components = [
  HomeComponent, AboutComponent, UsersComponent,UserComponent,UserDetailsComponent
]


//}


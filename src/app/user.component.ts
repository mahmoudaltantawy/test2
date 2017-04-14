import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-user',
    template: `
     <div class="row" *ngIf="user">
        <div class="col-md-3"></div>
        <ul class="col-md-9 list-unstyled  user__info">
          
           <li class="user__avatar"> 
                <img src="https://avatars3.githubusercontent.com/u/{{user.id|json}}?v=3" class="img-thumbnail"/>
           </li>
           <li> {{user.login}}</li>
           <li *ngIf="user.bio" class="user__bio"> {{user.bio}}</li>
           <li *ngIf="!user.bio"  class="user__bio"> no bio</li>
           <li><a href="/users/{{user.id}}" class="load__info">More Information </a></li>
        </ul>
      
    </div>
  `,
})
export class UserComponent {
    @Input() user: any;


}

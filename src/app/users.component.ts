import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appservices } from './app.services';
import "rxjs/add/operator/take";


@Component({
  selector: 'Users-app',
  template: `
     <div class="row">
       <h2> Users </h2>
            <ul class="col-md-3 users list-unstyled">
                <li *ngFor= "let p of posts" (click)="selectUser(p)">
                     {{p.login}}
                </li>
            </ul>
            <div class="col-md-9">
               <app-user [user]="selectedUser"></app-user>
            </div>
    </div>
        
  `,
  providers: [Appservices]

})
export class UsersComponent {
  @Output() changed = new EventEmitter<any>();

  posts: any;
  selectedUser: any;

  constructor(private __appserv: Appservices) {
    this.__appserv
      .getPosts()
      .subscribe(data => {
        this.posts = data;
        this.selectedUser = data[0];
      })
  }

  selectUser(selectedUser: any) {
    this.__appserv
      .getUser(selectedUser.login)
      .subscribe(data => {
        this.selectedUser = data;
        this.changed.emit(selectedUser)

      })
  }
}

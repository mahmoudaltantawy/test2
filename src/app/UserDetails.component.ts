import { Component, OnInit } from '@angular/core';
import { Appservices } from './app.services';
import { ActivatedRoute, Params } from '@angular/router';

import "rxjs/add/operator/switchMap";


@Component({
  selector: 'User-detail',
  template: `
   <div *ngIf="user"> {{user|json}}</div>
  `,
  providers: [Appservices]
)
export class UserDetailsComponent implements OnInit {
  user: any
  constructor(
    private appservices: Appservices,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params
      .subscribe(params  => {
        this.appservices.getSpecificUser(+params['id'])
        .subscribe(data=>this.user=data);
      });
  }
}

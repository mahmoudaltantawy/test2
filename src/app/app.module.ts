import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import{ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule }  from '@angular/router';


import{ Components,routConfig} from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  imports:      [ BrowserModule,HttpModule,
   routConfig
    ],
  declarations: [ AppComponent , Components],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { HttpClientModule } from '@angular/common/http';
import { Usereditcomponent } from './useredit/useredit.component';

const Route:any=[{
  path:"",
  redirectTo:"home",
  pathMatch:"full",
},
{
  path:"home",
  component:homeComponent
},
{
  path:"useredit/:id",
  component:Usereditcomponent
}]

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    Usereditcomponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(Route,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

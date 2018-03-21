import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Bootstrap Angular
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Router
import { RouterModule } from '@angular/router';
// Toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Forms Module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/account/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        redirectTo: '/account/login',
        pathMatch: 'full'
      },
      {
        path: 'signup',
        redirectTo: '/account/signup',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'account',
        loadChildren: 'app/forms/forms.module#FormModule'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

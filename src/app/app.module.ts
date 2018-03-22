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

import { AuthGuard } from './core/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
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
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren: 'app/public/forms.module#FormModule'
      }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

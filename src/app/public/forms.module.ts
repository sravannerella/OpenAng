import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class FormModule { }

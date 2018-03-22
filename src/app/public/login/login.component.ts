import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};
  @ViewChild('login') login;

  constructor(private toaster: ToastrService, private router: Router) {  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login.valid) {
      this.router.navigate(['home']);
      this.toaster.success('', 'Success!', {
        timeOut: 2000,
        tapToDismiss: true
      });
      localStorage.setItem('email', this.login.value.email);
    } else {
      this.toaster.error('Complete the required feilds and submit the form again.', 'Error!');
    }
  }

}

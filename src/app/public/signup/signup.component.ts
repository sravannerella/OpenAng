import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('signup') signup;
  submitted = false;
  user: User;

  constructor(private toaster: ToastrService, private router: Router) {
    this.user = new User('', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.signup.valid) {
      this.toaster.success('User Created!', 'Success!');
      this.router.navigate(['login']);
    } else {
      this.toaster.error('Complete the required feilds and submit the form again.', 'Error!');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isNavbarCollapsed: boolean;
  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.isNavbarCollapsed = true;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
    this.toastr.success('', 'Log Out Successful');
  }

}

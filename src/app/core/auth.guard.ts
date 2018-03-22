import {CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private toastr: ToastrService) {}

    canActivate() {
        console.log('GUARD');
        if (localStorage.getItem('email') !== null) {
            return true;
        } else {
            this.toastr.info('', 'Please Log in', {
                timeOut: 2000,
                tapToDismiss: true
            });
            this.router.navigateByUrl('/login');
        }
    }
}

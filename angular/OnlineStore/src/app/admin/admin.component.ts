import { AuthenticationService } from './../../Model/auth.service';
import { Router } from '@angular/router';
import { Component } from "@angular/core";



@Component({
    templateUrl: "./admin.component.html"
})
export class AdminComponent {

    constructor(private auth: AuthenticationService, private router: Router) {

    }
    /**
     * this method used to logout from admin session.
     */
    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }

}
import { AuthenticationService } from './../../Model/auth.service';
import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./auth.component.html"
})
export class AuthComponent {

    public username: string = undefined;
    public password: string = undefined;
    public errorMessage: string = undefined;

    constructor(private router: Router, private auth: AuthenticationService) {

    }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password).subscribe(response => {
                if (response) {
                    this.router.navigateByUrl("/admin/main");
                } else {
                    this.errorMessage = "Authentication Failed!!!";
                }
            })
        } else {
            this.errorMessage = "Form Data Invalid!!!";
        }
    }
}
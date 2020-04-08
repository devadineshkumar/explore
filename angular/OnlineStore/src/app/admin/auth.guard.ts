import { AuthenticationService } from './../../Model/auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard {

    constructor(private Route: Router, private auth: AuthenticationService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.auth.authenticate) {
            this.Route.navigateByUrl("/admin/auth");
            return false;
        }

        return true;
    }

}
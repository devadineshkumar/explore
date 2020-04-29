import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot): boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return new Promise(resolve => {
      this.as.user.subscribe(user => {
        if (user) {
          resolve(true)
        } else {
          this.router.navigate(['/login'])
        }
      })
    })
  }

  constructor(private as: AuthService, private router: Router) { }

}

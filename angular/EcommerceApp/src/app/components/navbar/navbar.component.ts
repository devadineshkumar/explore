import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginSuccess: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if (user) {
        this.loginSuccess = true;
        this.auth.userId = user.uid;
      } else {
        this.loginSuccess = false;
        this.auth.userId = '';
      }
    });
  }

  isOpen: boolean = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.auth.logout().then(data => {
      this.router.navigateByUrl('/login');
      this.loginSuccess = false;
    }).catch(error => {
      this.loginSuccess = false;
      console.log("Logout error, ", error);
    });
  }

}
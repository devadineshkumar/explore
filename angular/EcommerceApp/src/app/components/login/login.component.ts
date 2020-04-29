import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: String = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {

    if (form.valid) {
      this.auth.login(form.value.email, form.value.password).then(data => {
        this.router.navigateByUrl('/');
       // this.auth.user = data;
      }).catch(err => {
        console.log(err.message)
        this.errorMessage = err.message;
      } );

    }

  }

}

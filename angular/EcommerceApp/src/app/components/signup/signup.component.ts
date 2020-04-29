import { UsersService } from './../../service/users.service';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string = null;

  constructor(private auth: AuthService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {

  }

  signup(form: NgForm) {
    if (form.valid) {
      this.auth.signup(form.value.email, form.value.password)
      .then(data => {
        this.usersService.addNewUser(data.user.uid, form.value.name, form.value.address);
        this.errorMessage = null;
        this.router.navigate(['/']);
      })
      .catch(err => this.errorMessage = err);
    }

  }

}

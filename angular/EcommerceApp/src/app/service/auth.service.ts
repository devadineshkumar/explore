import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User> = null;
  userId : string = '';

  constructor(private fAuth: AngularFireAuth) {
    this.user = fAuth.user;

  }

  signup(email: string, password: string) {
    return this.fAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.fAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.user = null;
    return this.fAuth.signOut();
  }
}

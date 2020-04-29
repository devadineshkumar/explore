import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fireStore: AngularFirestore) {

  }

  addNewUser(id: string, name: string, address: string) {
    this.fireStore.doc('Users/' + id).set({
      name,
      address
    });
  }
}

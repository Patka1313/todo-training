import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class FirebaseEmployeesService {
  constructor(private _client: AngularFirestore) {
  }
} 

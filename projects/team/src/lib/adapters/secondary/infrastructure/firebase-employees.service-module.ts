import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseEmployeesService } from './firebase-employees.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseEmployeesService],
  	exports: [] })
export class FirebaseEmployeesServiceModule {
}

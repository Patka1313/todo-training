import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';

@Injectable()
export class FirebaseEmployeesService implements GetsAllEmployeeDtoPort{
  constructor(private _client: AngularFirestore) {
  }
  getAll(criterion?: EmployeeDTO): Observable<EmployeeDTO[]> {
    return this._client.collection<EmployeeDTO>('travel-list').valueChanges(({idField:'id'}))
  }
} 

import { ActivatedRoute } from '@angular/router';
import { Observable, observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { map } from 'rxjs/operators';

@Component({ selector: 'lib-team-list', templateUrl: './team-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TeamListComponent {
    
  list$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();
  employee$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll()
  .pipe(
    map((employeeList: EmployeeDTO[]) =>
      employeeList.sort((a, b) => a.order - b.order) 
    ));
  constructor(
    @Inject(GETS_ALL_EMPLOYEE_DTO) 
    private _getsAllEmployeeDto: GetsAllEmployeeDtoPort 
   
    ) {}
}

import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-employee-detail', templateUrl: './employee-detail.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailComponent {
    employees$: Observable<EmployeeDTO[]> = of ([
{
    id: '1',
    name: 'mickeymickey',
    description: 'zapalony podróżnik, fan motoryzacji, miłośnik kuchni azjatyckiej',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiQFxrMuKAIHpke90H40UKqV3s4vxILWK7g&usqp=CAU'
}
    ])
}

import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-team-list', templateUrl: './team-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TeamListComponent {
    employees$: Observable<EmployeeDTO[]> = of([
        {   id: '1',
            name: 'mickey',
            description: 'zapalony podróżnik, fan motoryzacji, miłośnik kuchni azjatyckiej',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiQFxrMuKAIHpke90H40UKqV3s4vxILWK7g&usqp=CAU',
            department: {
                name: 'prezes',
                employeeCount: 1
            }
        },
        {   id: '2',
            name: 'donald',
            description: 'wszędzie mu dobrze gdzie go nie ma, kulturoznawca, najlepszy przyjaciel mickeya',
            imgUrl: 'https://assets.puzzlefactory.pl/puzzle/310/555/original.jpg',
            department: {
                 name: 'dyrektor',
                 employeeCount: 1
            }
        },
        {   id: '3',
            name: 'jerry',
            description: 'człowiek złoto, niezastąpiony w biurze, niezastąpiony w podróży',
            imgUrl: 'https://miastodzieci.pl/wp-content/uploads/2020/10/jerry_mouse.jpg',
            department: {
                name: 'asystent',
                employeeCount: 1
            }
        }

])}

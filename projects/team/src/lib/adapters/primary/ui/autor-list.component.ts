import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { AutorDTO } from '../../../application/ports/secondary/autor.dto';

@Component({ selector: 'lib-autor-list', templateUrl: './autor-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AutorListComponent {
    list: AutorDTO []=[
        {opis: 'opis xxx',
        zdjecie: 'https://d-art.ppstatic.pl/kadry/k/r/ec/21/5b8f67590fa44_o_large.jpg'}
    ];
    
}

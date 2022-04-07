import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownicyPage } from './pracownicy.page';
import { AutorListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/autor-list.component-module';
import { TeamListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/team-list.component-module';
import { FirebaseEmployeesServiceModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: PracownicyPage,
        }
      ]),
  AutorListComponentModule,
  TeamListComponentModule,
  FirebaseEmployeesServiceModule,
],
  	declarations: [PracownicyPage],
  	providers: [],
  	exports: [] })
export class PracownicyPageModule {
}
 {
}
 {
}
 {
}

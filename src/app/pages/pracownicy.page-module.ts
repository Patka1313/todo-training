import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownicyPage } from './pracownicy.page';
import { AutorListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/autor-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: PracownicyPage,
        }
      ]),
  AutorListComponentModule
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TeamListComponent],
  	providers: [],
  	exports: [TeamListComponent] })
export class TeamListComponentModule {
	image = {
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiQFxrMuKAIHpke90H40UKqV3s4vxILWK7g&usqp=CAU'
	}
}

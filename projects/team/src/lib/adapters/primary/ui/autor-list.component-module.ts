import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorListComponent } from './autor-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AutorListComponent],
  	providers: [],
  	exports: [AutorListComponent] })
export class AutorListComponentModule {
}

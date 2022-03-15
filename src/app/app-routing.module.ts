import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePageModule } from './pages/home.page-module';
import { PracownicyPageModule } from './pages/pracownicy.page-module';

const routes: Routes = [{ 
        path: 'onas', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'employees', 
        loadChildren: () => PracownicyPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

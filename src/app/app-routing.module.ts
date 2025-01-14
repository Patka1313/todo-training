import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
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
      },
  { 
        path: 'pracownik/:employeeId', 
        loadChildren: () => EmployeeDetailsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 Here we can observe that each component is called by placing their route to the their respective module. And that module will be linked to that particular page
 */

const routes: Routes = [
  { 
    path: 'students', 
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },

  { 
    path: 'teachers', 
    loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) 
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

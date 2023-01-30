import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';

/**
 Here path is empty as it is defined for this component only and all the routes added here will be the children routes for this module. 
 */

const routes: Routes = [{ path: '', component: TeachersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }

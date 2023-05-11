import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Project1Component} from "./project1.component";

const routes: Routes = [
  {
    path: '',
    component: Project1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class Project1RoutingModule {}

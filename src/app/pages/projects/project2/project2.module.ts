import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project2Component } from './project2.component';
import {Project2RoutingModule} from "./project2-routing.module";



@NgModule({
  declarations: [
    Project2Component
  ],
  imports: [
    CommonModule,
    Project2RoutingModule
  ]
})
export class Project2Module { }

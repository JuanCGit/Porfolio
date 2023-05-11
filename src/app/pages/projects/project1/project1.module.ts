import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project1Component } from './project1.component';
import {Project1RoutingModule} from "./project1-routing.module";



@NgModule({
  declarations: [
    Project1Component
  ],
  imports: [
    CommonModule,
    Project1RoutingModule
  ]
})
export class Project1Module { }

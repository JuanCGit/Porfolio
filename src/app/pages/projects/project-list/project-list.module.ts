import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ProjectListComponent} from "./project-list.component";



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class ProjectListModule { }

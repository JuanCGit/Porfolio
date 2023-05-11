import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ProjectListComponent} from "./project-list.component";
import {ProjectListRoutingModule} from "./project-list-routing.module";



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectListRoutingModule,
    RouterLink
  ]
})
export class ProjectListModule { }

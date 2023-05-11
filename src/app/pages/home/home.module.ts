import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        RouterLink,
        TranslateModule
    ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chesswrite } from './chesswrite';
import {ChesswriteRoutingModule} from "./chesswrite-routing.module";



@NgModule({
  declarations: [
    Chesswrite
  ],
  imports: [
    CommonModule,
    ChesswriteRoutingModule
  ]
})
export class ChesswriteModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Chesswrite} from "./chesswrite";

const routes: Routes = [
  {
    path: '',
    component: Chesswrite
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChesswriteRoutingModule {}

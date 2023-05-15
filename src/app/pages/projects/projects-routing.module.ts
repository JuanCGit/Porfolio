import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./project-list/project-list.module').then(m => m.ProjectListModule)
      },
      {
        path: 'chesswrite',
        loadChildren: () => import('./chesswrite/chesswrite.module').then(m => m.ChesswriteModule)
      },
      {
        path: 'project2',
        loadChildren: () => import('./project2/project2.module').then(m => m.Project2Module)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProjectsRoutingModule {}

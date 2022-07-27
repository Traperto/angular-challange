import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-mat',
    pathMatch: 'full'
  },
  {
    path: 'todo-mat',
    component: LayoutComponent,
    loadChildren: () => import('./todo-module/todo-material.module').then(m => m.TodoMaterialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

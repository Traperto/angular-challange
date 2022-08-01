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
  },
  {
    path: 'todo-v2',
    component: LayoutComponent,
    loadChildren: () => import('./todo-v2/todo-v2.module').then(m => m.TodoV2Module)
  },
  {
    path: '**',
    redirectTo: 'todo-mat',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

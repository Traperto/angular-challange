import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoMaterialRoutingModule } from './todo-material-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared-module/shared.module';
import { TodoTableComponent } from './todo-list/todo-table/todo-table.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoTableComponent,
  ],
  imports: [
    CommonModule,
    TodoMaterialRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TodoMaterialModule { }

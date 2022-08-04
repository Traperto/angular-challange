import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoV2RoutingModule } from './todo-v2-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared-module/shared.module';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoV2RoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TodoV2Module { }

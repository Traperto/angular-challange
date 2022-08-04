import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input() todo: Todo
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleStatus: EventEmitter<string> = new EventEmitter<string>();
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  done: boolean
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['todo'])
    this.done = this.todo.status == 'complete' ? true : false
  }

  ngOnInit(): void {
    this.done = this.todo.status == 'complete' ? true : false
  }
  _edit(id: string){
    this.edit.emit(id)
  }
  _delete(id: string){
    this.delete.emit(id)
  }
  statusChanged(event:MatCheckboxChange, id: string){
    console.log(event);
    this.toggleStatus.emit(id)
  }
}

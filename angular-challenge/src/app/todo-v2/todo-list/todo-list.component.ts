import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, combineLatestWith, map, Observable, take } from 'rxjs';
import { Priority, Todo } from 'src/app/models/todo';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TodosService } from 'src/app/services/todos.service';
import { ConfirmDialogComponent } from 'src/app/shared-module/components/confirm-dialog/confirm-dialog.component';
import { TodoFormComponent } from 'src/app/shared-module/components/todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  priorities: string[] = ['urgent', 'normal', 'later', 'delegate']
  statuss: string[] = []
  todos: Observable<Todo[]>
  filter: { priorities?: string; status?: string }
  sort: { property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending' | '' }

  constructor(private todoService: TodosService, private dialog: MatDialog, private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.todos = combineLatest([this.todoService.todos, this.todoService.filter, this.todoService.sort])
      .pipe(
        map(([todos, filter, sort]: [Todo[], { priorities?: string; status?: string }, { property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending' | '' }]) => {
          todos = todos.sort((a, b) => b.addedDate.getTime() - a.addedDate.getTime()) // default sort
          if (filter) {
            todos = todos.filter((x) => (filter?.status ? x.status == filter?.status : true) && (filter?.priorities ? Priority[x.priority] == filter?.priorities : true));
          }
          if (sort) {
            todos = this.sortFn(todos, sort)
          }
          return todos;
        })
      )


  }
  applyFilter(filterValue: { priorities?: string; status?: string }) {
    this.todoService.filter.next(filterValue)
  }
  applySort(sortValue: { property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending' | '' }) {
    this.todoService.sort.next(sortValue)
  }
  edit_create_Todo(id?: string) {
    console.log(id);
    let todo: Todo
    if (id) todo = this.todoService.findById(id)
    this.openFormDialog(todo)
    // this.refreshDataSource()
  }
  openFormDialog(todo?: Todo): void {
    this.dialog.open(TodoFormComponent, {
      data: todo,
      // panelClass: 'form-dialog',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
    }).afterClosed().pipe(take(1)).subscribe(data => {
      if (!data) return
      if (!data.id)
        this.todoService.add(data)
      else this.todoService.edit(data)
      console.log(data, 'ng dialog')
      this.snackBarService.openSnackBar('Success', 'Dismiss', 1500)
    }
    );
  }
  // refreshDataSource() {
  //   let _todos = this.todoService.getAll()
  //   if (this.filter)
  //     _todos = _todos.filter(x => (this.filter?.status ? x.status == this.filter?.status : true) && (this.filter?.priorities ? Priority[x.priority] == this.filter?.priorities : true))
  //   // if (this.sort) {
  //   //   this.sortFn(_todos)
  //   // }
  //   // this.todos = _todos
  // }
  sortFn(_todos: Todo[], sort: { property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending' | '' }) {
    if (sort.property == 'title') { // string
      _todos = _todos.sort((a, b) => {
        let val = a['title'].localeCompare(b['title'])
        if (sort.type == 'descending')
          val *= -1
        return val
      })
    }
    else if (sort.property == 'dueDate' || 'priority') { // number
      _todos = _todos.sort((a, b) => {
        let val = a[sort.property as keyof (Todo)] as number - (b[sort.property as keyof (Todo)] as number)
        if (sort.type == 'descending')
          val *= -1
        return val
      })
    }
    return _todos
  }
  trackByFn(index: number, todo: Todo) {
    return todo.id
  }
  deleteTodo(id: string) {
    let todo: Todo
    if (id) todo = this.todoService.findById(id)
    this.openConfirmDialog(todo)
    console.log(id);
    // this.refreshDataSource()
  }
  openConfirmDialog(todo?: Todo): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: todo,
      width: '300px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
    }).afterClosed().pipe(take(1)).subscribe((data: Todo) => {
      if (!data) return
      this.todoService.deleteById(data.id)
      this.snackBarService.openSnackBar(`${data.title} Delete Success`, 'Dismiss', 1500)
    }
    );
  }
  toggleStatus(id: string) {
    let todo: Todo
    if (id) todo = this.todoService.findById(id)
    todo.status == 'complete' ? todo.status = 'incomplete' : todo.status = 'complete'
    this.todoService.edit(todo)
  }
}

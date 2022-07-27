import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';
import { TodoFormComponent } from 'src/app/shared-module/components/todo-form/todo-form.component';
import { take } from 'rxjs/operators';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { ConfirmDialogComponent } from 'src/app/shared-module/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  priorities: string[] = ['urgent', 'normal', 'later', 'delegate']
  statuss: string[] = []
  todos: Todo[] = []
  filter: { priorities?: string; status?: string }


  // dialogRef: 
  constructor(private todoService: TodosService, private dialog: MatDialog, private snackBarService: SnackBarService) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.refreshDataSource()

  }

  applyFilter(filterValue: { priorities?: string; status?: string }) {
    this.filter = filterValue
  }
  edit_create_Todo(id?: string) {
    console.log(id);
    let todo: Todo
    if (id) todo = this.todoService.findById(id)
    this.openFormDialog(todo)
    // this.refreshDataSource()
  }
  deleteTodo(id: string) {
    let todo: Todo
    if (id) todo = this.todoService.findById(id)
    this.openConfirmDialog(todo)
    console.log(id);
    this.refreshDataSource()
  }
  refreshDataSource() {
    this.todos = this.todoService.getAll()
  }
  openFormDialog(todo?: Todo): void {
    this.dialog.open(TodoFormComponent, {
      data: todo,
      // panelClass: 'form-dialog',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '100ms',
    }).afterClosed().pipe(take(1)).subscribe(data => {
      if (!data) return
      if (!data.id)
        this.todoService.add(data)
      else this.todoService.edit(data)
      console.log(data, 'ng dialog')
      this.snackBarService.openSnackBar('Success', 'Dismiss', 1500)
      this.refreshDataSource()
    }
    );
  }

  openConfirmDialog(todo?: Todo): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: todo,
      width: '300px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '100ms',
    }).afterClosed().pipe(take(1)).subscribe((data: Todo) => {
      if (!data) return
      this.todoService.deleteById(data.id)
      this.snackBarService.openSnackBar(`${data.title} Delete Success`, 'Dismiss', 1500)
      this.refreshDataSource()
    }
    );
  }

}

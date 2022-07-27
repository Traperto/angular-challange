import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TodoFormComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  todoForm = new FormGroup({
    id: new FormControl('',),
    title: new FormControl('',{validators: Validators.required}),
    description: new FormControl(''),
    priority: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl(''),
  });
  ngOnInit(): void {
    if(this.data){
      delete this.data.addedDate
      this.todoForm.setValue(this.data)
    }
  }

  cancel(){
    this.dialogRef.close()
  }
  submit(){
    this.dialogRef.close(this.todoForm.value)
  }
}

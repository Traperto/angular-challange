import { InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ],
      providers: [
        {provide:MatDialogRef, useClass: class {} },
        {provide:MAT_DIALOG_DATA, useValue:  {
          id: 'generateId()',
          title: 'thirs todo',
          description: 'todo desc',
          dueDate: new Date(),
          priority: 1,
          status: 'complete'
        } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

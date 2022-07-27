import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TodosService } from 'src/app/services/todos.service';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers:[
        // {provide:TodosService, useClass: class {}},
        {provide:MatDialog, useClass: class {}},
        {provide:SnackBarService, useClass: class {}},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let userService = fixture.debugElement.injector.get(TodosService)
    fixture.detectChanges();
    expect(userService).toBeTruthy();
    expect(component).toBeTruthy();
    expect(component.filter).toBeUndefined()

  });
  it('should fetch todos', () => {
    let userService = fixture.debugElement.injector.get(TodosService)
    fixture.detectChanges();
    expect(userService).toBeTruthy();
    expect(component).toBeTruthy();
    expect(component.todos.length).toEqual(userService.getAll().length)
    expect(component.todos.length).toBeGreaterThan(300)

  });
});

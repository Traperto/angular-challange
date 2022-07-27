import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new TodosService();;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.getAll().length).toBeGreaterThan(0)
  });
  it('should find single todo by id', () => {
    expect(service).toBeTruthy();
    const todo = service.getAll()[0]
    const _todo = service.findById(todo.id)

    expect(todo).toEqual(_todo)
  });
  it('should delete successfully', () => {
    expect(service).toBeTruthy();
    const todosNum = service.getAll().length
    const todo = service.getAll()[0]
    service.deleteById(todo.id)

    expect(todosNum).toBeGreaterThan(service.getAll().length)
  });
});

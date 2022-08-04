import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Priority, Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: BehaviorSubject<Todo[]> = new BehaviorSubject(todos)
  filter: BehaviorSubject<{ priorities?: string; status?: string }> = new BehaviorSubject({})
  sort: BehaviorSubject<{ property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending' | '' }> = new BehaviorSubject({})

  constructor() {
    // this.todos = todos
  }
  getAll(): Todo[] {
    return this.todos.getValue().map(x => { return { ...x } }).sort((a, b) => b.addedDate.getTime() - a.addedDate.getTime())
  }
  findById(id: string): Todo {
    return { ...this.todos.getValue().find(x => x.id == id) }
  }
  deleteById(id: string): void {
    const todos = this.todos.getValue()
    const newTodos = todos.splice(todos.findIndex(x => x.id == id), 1)
    this.todos.next(todos)
  }
  add(todo: Omit<Todo, 'id'>) {
    const _todo: Todo = { ...todo, id: generateId(), addedDate: new Date() }
    const todos = this.todos.getValue()
    todos.push(_todo)
    this.todos.next(todos)
  }
  edit(todo: Todo) {
    if (todo?.id) {
      const todos = this.todos.getValue()
      const _todo = todos.find(x => x.id == todo.id)
      todos?.splice(todos.findIndex(x => x.id == todo?.id), 1, { ...todo, addedDate: _todo.addedDate })
      this.todos.next(todos)
    }
  }
  applyFilter(filter: { priorities?: string; status?: string }) {
    this.filter.next(filter)
  }
  applySort(sort: { property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending' | '' }) {
    this.sort.next(sort)
  }
}

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const todos: Todo[] = [
  {
    id: generateId(),
    title: 'first todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date(),
  },
  {
    id: generateId(),
    title: 'second todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date(),
  },
  {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  },
  {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }, {
    id: generateId(),
    title: 'thirs todo',
    description: 'todo desc',
    dueDate: new Date(),
    priority: 1,
    status: 'complete',
    addedDate: new Date()
  }
]
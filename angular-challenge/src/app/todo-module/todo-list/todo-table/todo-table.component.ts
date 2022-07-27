import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Priority, Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoTableComponent implements OnInit, OnChanges {
  getScreenWidth: number;
  getScreenHeight: number;
  @Input() todos: Todo[]
  @Input() filter: { priorities?: string; status?: string }
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  dataSource = new MatTableDataSource<Todo>();
  displayedColumns: string[] = ['id', 'title', 'description', 'priority', 'dueDate', 'status', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todos'])
      this.refreshDataSource()
    if (changes['filter'])
      this.applyFilter(this.filter)
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.correctDisplayColumns()
  }
  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.correctDisplayColumns()
    this.dataSource.filterPredicate = function (data, filter: string): boolean { // this filter parameter can only be string so i had to do the stringify parse trick
      const obj: { priorities: string, status: string } = JSON.parse(filter);
      return ((obj.priorities ? Priority[data.priority] == obj.priorities : true) && (obj.status ? data.status == obj.status : true))
    };
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  editTodo(id: string) {
    this.edit.emit(id)
  }
  deleteTodo(id: string) {
    this.delete.emit(id)
  }
  refreshDataSource() {
    this.dataSource.data = this.todos
  }
  applyFilter(filterValue: { priorities?: string; status?: string }) {
    if (!filterValue) return
    const obj = JSON.stringify(filterValue)
    this.dataSource.filter = obj.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  watcher() {
    console.log('re render table');
  }
  correctDisplayColumns(){
    if(this.getScreenWidth < 765) this.displayedColumns = [ 'title', 'status', 'action']
    else this.displayedColumns =  ['id', 'title', 'description', 'priority', 'dueDate', 'status', 'action'];
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-actions',
  templateUrl: './top-actions.component.html',
  styleUrls: ['./top-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopActionsComponent implements OnInit {
  @Output() filterSelected: EventEmitter<{priorities?:string,status?:string}> = new EventEmitter<{priorities?:string,status?:string}>();
  @Output() sortSelected: EventEmitter<{ property?: 'title' | 'priority' | 'dueDate' | '', type?: 'ascending' | 'descending'| '' }> = new EventEmitter<{ property?: 'title' | 'priority' | 'dueDate'| '', type?: 'ascending' | 'descending'| '' }>();
  @Output() createTodo: EventEmitter<void> = new EventEmitter<void>();

  sort: string
  currentUrl: string = ''
  priorities: string[] = ['urgent', 'normal', 'later', 'delegate']
  filterForm = new FormGroup({
    priorities: new FormControl<string>(''),
    status: new FormControl<string>(''),
  });
  sortForm= new FormGroup({
    property: new FormControl<'title' | 'priority' | 'dueDate' | ''>(''),
    type: new FormControl<'ascending' | 'descending'|''>(''),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url
    console.log(this.router.url);
    
  }
  filter(){
    this.filterSelected.emit(this.filterForm.value)
  }
  sortFn(){
    this.sortSelected.emit(this.sortForm.value)
  }
  create(){
    this.createTodo.emit()
  }
  watcher() {
    console.log('re render top actions');
  }
  identify = (index: number, item: string) => item;
}

import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-actions',
  templateUrl: './top-actions.component.html',
  styleUrls: ['./top-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopActionsComponent implements OnInit {
  @Output() filterSelected: EventEmitter<{priorities?:string,status?:string}> = new EventEmitter<{priorities?:string,status?:string}>();
  @Output() createTodo: EventEmitter<void> = new EventEmitter<void>();

  priorities: string[] = ['urgent', 'normal', 'later', 'delegate']
  filterForm = new FormGroup({
    priorities: new FormControl(''),
    status: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  filter(){
    this.filterSelected.emit(this.filterForm.value)
  }
  create(){
    this.createTodo.emit()
  }
  identify = (index: number, item: string) => item;
}

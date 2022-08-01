import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityPipe } from './pipes/priority.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TopActionsComponent } from './components/top-actions/top-actions.component';


const material = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [PriorityPipe, TodoFormComponent, ConfirmDialogComponent, TopActionsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...material

  ],
  exports: [
    TopActionsComponent,
    PriorityPipe,
    ...material
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      // providers: [ ]
    }
  }
}

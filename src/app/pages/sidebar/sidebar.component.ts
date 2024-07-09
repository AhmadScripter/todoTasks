import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TodoItem } from '../../models/todo-item';
import { TodoServiceService } from '../../services/todo-service.service';
import { TodoFilterService } from '../../services/todo-filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  activeFilter: string = 'All';

  constructor(private dialog: MatDialog, private todoFilterService: TodoFilterService){ }

  setFilter(filter: string): void {
    this.todoFilterService.changeFilter(filter);
    this.activeFilter = filter;
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px',
      disableClose: true, // Prevent closing the dialog without clicking the button
      autoFocus: true,
      // position: {
      //   top: '50%',
      //   left: '50%'
      // }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
    });
  }

}

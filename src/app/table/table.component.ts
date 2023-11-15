import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(public dataService: DataService, private router: Router) {}

  // Delete row, if there arent any more rows to be deleted, redirects to home
  // to add data to the table
  deleteBtn(index: number) {
    this.dataService.tableData.splice(index, 1);

    if (this.dataService.tableData.length < 1) {
      alert('Please enter your details');
      this.router.navigate(['/']);
    }
  }

  //Connected to the shared service, setting edit mode and grabbing table data
  // by index that is being edited
  editBtn(index: number) {
    this.dataService.setEditRow = index;
    this.dataService.getEditData();
    this.dataService.setEditState(true);
    this.router.navigate(['/']);
  }
}

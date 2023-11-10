import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  
  constructor(public dataService: DataService, private router: Router) {}

  deleteBtn(index: number) {
    this.dataService.tableData.splice(index, 1);

    if (this.dataService.tableData.length < 1) {
      alert('Please enter your details');
      this.router.navigate(['/']);
    }
  }




  editBtn(index: number) {
    this.dataService.setEditRow = index;
    this.dataService.getEditData()
    this.dataService.setEditState(true)
    this.router.navigate(['/'])
  }
}

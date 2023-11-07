import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  userDetails: any;

  constructor(public dataService: DataService, private router: Router) {}

  deleteBtn(index: number) {
    this.dataService.sharedFormData.splice(index, 1);

    if (this.dataService.sharedFormData.length < 1) {
      alert('Please enter your details');
      this.router.navigate(['/']);
    }
  }

  editBtn(index: number) {
    this.dataService.setEditRow = index;
    this.dataService.editBtn()
    this.router.navigate(['/'])
  }
}

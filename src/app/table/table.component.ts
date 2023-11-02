import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  formData: any;
  


  constructor(public dataService: DataService, private router: Router) {}

  showMessage() {
    const formData = this.formData;
    console.log('working on getting data shown here:', formData);
  }

  deleteBtn(element:any) {
   this.dataService.formData.forEach((value:any, index:any) => {
    if(value === element)
      this.dataService.formData.splice(index, 1)
    
   });
    console.log('this button will be removed', element);
  }
  editBtn() {
    console.log('this button will be edited');
  }
}

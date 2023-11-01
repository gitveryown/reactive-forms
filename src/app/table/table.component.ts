import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  formData: any ;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.formData = this.dataService.getFormData()
    //   const navigationState = this.activedRoute.snapshot.root;
    //   if (
    //     navigationState &&
    //     navigationState.firstChild &&
    //     navigationState.firstChild.data
    //   ) {
    //     console.log('Navigation State:', navigationState);
    //     console.log('State Data:', navigationState.firstChild.data);
    //     if (navigationState.firstChild?.data['state']) {
    //       this.formData = navigationState.firstChild.data['state'].formData;
    //     } else {
    //       console.log('State does not contain "formData"');
    //     }
    //   }
  }

  getFormData() {
    // This will be the code to create formData as an array, use paraMap, or maybe objects.entries
  }

  showMessage() {
    const formData = this.formData;
    console.log('working on getting data shown here:', formData);
  }

  deleteBtn() {
    console.log('this button will be removed');
  }
  editBtn() {
    console.log('this button will be edited');
  }
}

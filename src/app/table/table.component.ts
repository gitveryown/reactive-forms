import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  formData: any;

  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    const navigationState = this.activedRoute.snapshot.root;
    if (
      navigationState &&
      navigationState.firstChild &&
      navigationState.firstChild.data
    ) {
      console.log('Navigation State:', navigationState);
      console.log('State Data:', navigationState.firstChild.data);
      if (navigationState.firstChild?.data['state']) {
        this.formData = navigationState.firstChild.data['state'].formData;
      } 
      else {
        console.log('State does not contain "formData"');
      }
    }
  }

  showMessage() {
    const formData = this.formData;
    console.log('working on getting data shown here:', formData);
  }

  // deleteItem(i:string | number){
  //   console.log(i,'this button will be removed');
  // }
  // editItem(i:string | number){
  //   console.log(i,'this button will be edited');
  // }
}

import { Injectable } from '@angular/core';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root',
})
export class DataService {
 public tableData:Users[] = [];
 public setEditRow: number = -1;
 public editBtnClicked: boolean = false
  
  
 // Allows me to get the edit data to be configured
  getEditData() {
    const index = this.setEditRow
    return this.tableData[index]
  }

// Setting the set allow me to switch edit mode (state) off and on
  setEditState(edit:boolean){
    this.editBtnClicked = edit
    console.log('this edit button is now being clicked');
    
  } 

  // Returns the edit state
  getEditState(){
    return this.editBtnClicked
  }
// T rying to use reset method on submit didnt work, need to reset the state position
  resetEditState(){
    this.setEditRow = -1
  }
}


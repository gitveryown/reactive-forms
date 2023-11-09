import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tableData: any[] = [];
  setEditRow: number = -1;
  editBtnClicked: boolean = false
  
  

  // This is connected to the Edit btn on the Table Component
  editBtn() {
    const index = this.setEditRow
    return this.tableData[index]
  }

  setEditState(edit:boolean){
    this.editBtnClicked = edit
    console.log('this edit button is now being clicked');
    
  } 

  getEditState(){
    return this.editBtnClicked
  }
}


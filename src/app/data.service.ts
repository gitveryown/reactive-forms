import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  setEditRow: number = -1;
  sharedFormData: any[] = [];
  edit: any;
  editBtnClicked: boolean = false;

  // This is connected to the onSubmit on the Form Component
  setEditData(data: any) {
    // console.log('This is the received data:', data);
    return (this.edit = data);
  }

  // This is connected to the Edit btn on the Table Component
  editBtn() {
    this.editBtnClicked = true;
    const index = this.setEditRow;
    console.log('this is the data from table to the service:', this.sharedFormData[index]);
    
    return this.sharedFormData[index];
  }
}

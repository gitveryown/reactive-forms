import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Users } from '../models/users';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
 public userDetails: FormGroup;
 // create variable for user model

 

  constructor(private dataService: DataService, private router: Router) {

    const dataToEdit: any | null = this.dataService.getEditData();

    this.userDetails! = new FormGroup<Users>({
    
      firstName: new FormControl(dataToEdit ? dataToEdit.firstName : null, [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[A-Za-z]{1,30}'),
      ]),
      lastName: new FormControl(dataToEdit ? dataToEdit.lastName : null, [
        Validators.required,
        Validators.pattern('[A-Za-zs?]{1,30}'),
      ]),

      email: new FormControl(dataToEdit ? dataToEdit.email : null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    });
  }

// Sumbission of form data

  public onSubmit() :void {
    let formData = this.userDetails.value;
    let tableData = this.dataService.tableData;
    let index = this.dataService.setEditRow;
    const isEditMode = this.dataService.getEditState();
    const exitEditMode = this.dataService.setEditState(false);
// submission of form data if validations are correct and isn't in editMode
    if (this.userDetails.valid && !isEditMode) {
      tableData.push(formData);
      this.router.navigate(['/table']);
      console.log('not edit');
    }
    // When in edit mode, push data back to correct index and exit out of edit mode
    if (isEditMode && this.userDetails.valid) {
      console.log('edit mode');
      tableData[index] = formData
      this.router.navigate(['/table']);
      exitEditMode;
    }
    this.dataService.resetEditState();
    
  }
  // for validations
  get firstName(): any {
    return this.userDetails.get('firstName')!;
  }

  get lastName() {
    return this.userDetails.get('lastName')!;
  }

  get email() {
    return this.userDetails.get('email')!;
  }
}

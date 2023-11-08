import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userDetails: FormGroup;

  constructor(private dataService: DataService, private router: Router) {

    const dataToEdit:any | null = this.dataService.editBtn();

    this.userDetails! = new FormGroup({
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

  onSubmit() {
    let formData = this.userDetails.value;
    const tableData = this.dataService.tableData
    let index = this.dataService.setEditRow
    if (this.userDetails.valid) {
      tableData.push(formData);
      this.router.navigate(['/table']);
    }
    
    if(tableData[index] !== -1) {
      return tableData[index] = formData
    }
    

  }

  // for validations
  get firstName() {
    return this.userDetails.get('firstName')!;
  }

  get lastName() {
    return this.userDetails.get('lastName')!;
  }
 
  get email() {
    return this.userDetails.get('email')!;
  }
}

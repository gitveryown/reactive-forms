import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  title: string = 'This is my app'
  userDetails: FormGroup;
  data:any
  
  constructor(private dataService: DataService, private router: Router) {
    const dataToEdit:any | null = this.dataService.editBtn()
    console.log('this is the return data from table to the form:',dataToEdit);
    
    this.userDetails! = new FormGroup({
      firstName: new FormControl(null,[
        dataToEdit.firstName,
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[A-Za-z]{1,10}'),
      ]),
      lastName: new FormControl(null, [
        dataToEdit.lastName,
        Validators.required,
        Validators.pattern('[A-Za-zs?]{3,}'),
      ]),

      email: new FormControl(null, [
        dataToEdit.email,
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    });
  }

  onSubmit() {
    if (this.userDetails.valid) {
      const data = this.userDetails.value;
      this.dataService.setEditData(data);
      this.dataService.sharedFormData.push(data);
      this.router.navigate(['/table']);
      
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

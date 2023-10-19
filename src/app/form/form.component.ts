import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'Reactive Forms';
  userDetails!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.userDetails = new FormGroup({
      // add fullName form group 
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[A-Za-z]{1,30}'),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern('[A-Za-z\s?]{3,}'),
      ]),
      email: new FormControl(null, 
        [Validators.required, 
        Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.userDetails)
    console.log(this.firstName.errors);
    
}

get firstName() {
  return this.userDetails.get('firstName')!
  
}

}
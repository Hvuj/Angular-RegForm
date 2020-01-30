import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {FormService} from '../Form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  topics = [
    'Angular',
    'React',
    'Vue',
    'Jquery'
  ];
  techHasError = true;
  subbmited = false;
  errorMsg = '';

  userModel = new User('Hvuj', 'e', 'e@gmail.com', 'e', 0, 'Male', 'default', true);

  validateTech(value) {
    if (value === 'default') {
      this.techHasError = true;
    } else {
      this.techHasError = false;
    }
  }



  constructor(private _formService: FormService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.subbmited = true;
    this._formService._sub(this.userModel)
    .subscribe(
      data=>console.log('yes!', data),
      error=>this.errorMsg = error.statusText
    )
  }

}

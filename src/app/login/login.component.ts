import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor() {}

  validateLogin():Boolean {
    console.log('validate login', this.email, this.password)
    return true
  }
}

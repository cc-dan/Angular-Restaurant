import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import LoginService from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  emailFormInvalid?:Boolean
  passwordFormInvalid?:Boolean
  sendRequestPossible:Boolean

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  constructor(public loginService:LoginService, public router:Router) { // Inyectamos el servicio de login --> Nos podemos referir a él mediante "this"
    this.sendRequestPossible = true
  } 

  validateLoginForm():Boolean|any {
    this.emailFormInvalid = this.loginForm.get('email')?.invalid
    this.passwordFormInvalid = this.loginForm.get('password')?.invalid

    return !this.emailFormInvalid && !this.passwordFormInvalid
  }

  validateLoginData() {
    if (this.validateLoginForm()) {
      const formUserData = { 
        email:this.loginForm.get('email')?.value, 
        password:this.loginForm.get('password')?.value 
      }

      this.sendRequestPossible = false
      
      // Petición POST
      this.loginService.validateLogin(formUserData).subscribe(
        (data) => { 
          console.log("Request verificada en los servidores de Alkemy") 
          this.loginService.saveToken(data)
          this.router.navigateByUrl('')
        },                                  
        (err) => { 
          console.log("ERROR: ", err)
          Swal.fire("Error de verificación")
          this.sendRequestPossible = true
        }
      ) 
    }
  }
}

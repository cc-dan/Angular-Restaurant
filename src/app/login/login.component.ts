import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import LoginService from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  emailFormInvalid?:Boolean
  passwordFormInvalid?:Boolean
  sendRequestPossible:Boolean // Deshabilitar botón de login

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.required)
  })

  constructor(public loginService:LoginService) { // Inyectamos el servicio de login --> Nos podemos referir a él mediante "this"
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
        data => this.loginService.saveToken(data),                                  // Almacenar token
        err => { console.log("ERROR: ", err); Swal.fire("Error de verificación") }, // Manejo de errores
        () => console.log("Request verificada en los servidores de Alkemy")         // Finalización exitosa
      ).add(
        () => this.sendRequestPossible = true                                       // Función adicional ejecutada al final --> Cambiar el estado del botón login
      ) 
    } else { console.log("Los campos de email y contraseña no son válidos") }
  }
}

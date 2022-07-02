import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'

@Injectable({ providedIn: "root" }) // Hacemos que este archivo sea inyectable para utilizar en otro módulo

export default class LoginService {
    loginUrl = "http://challenge-react.alkemy.org/"
    cookieName = "alkemyToken"

    constructor(private http: HttpClient, private cookies: CookieService) {} // Inyectamos HttpClient y CookieService como dependencias de este servicio

    validateLogin(userData:any):Observable<any> {
        return this.http.post(this.loginUrl, userData) // Observable --> se accede a través del método subscribe()
        // El segundo parámetro es el body del request
    }
    /* The HttpClient service makes use of observables for all transactions. 
    You must import the RxJS observable and operator symbols that appear in the example snippets. These ConfigService imports are typical. 
    https://angular.io/guide/http */

    saveToken(token:string) {
        localStorage.setItem(this.cookieName, JSON.stringify(token))
    }

    getToken() {
        this.cookies.get(this.cookieName)
    }
}
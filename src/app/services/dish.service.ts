import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";

@Injectable({providedIn:'root'})

export default class DishService {
    constructor(private http:HttpClient) {
        if (env.API_KEY == null || env.API_KEY == '') {
            alert("Por favor, proporcionar la llave de la API")
        }
    }

    getDishSearchResults(query:string):Observable<any> {
        return this.http.get(`${env.API_URI}/complexSearch?apiKey=${env.API_KEY}&query=${query}&number=${env.MAX_SEARCH_RESULTS}`)
    }

    getDishDataById(dishId:number):Observable<any> {
        return this.http.get(`${env.API_URI}/${dishId}/information?apiKey=${env.API_KEY}`)
    }

    getRandomDishData():Observable<any> {
        return this.http.get(`${env.API_URI}/random?apiKey=${env.API_KEY}&number=2`)
    }
}
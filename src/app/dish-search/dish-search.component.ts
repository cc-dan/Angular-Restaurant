import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import DishService from '../services/dish.service';
import { HomeComponent } from '../home/home.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: ['./dish-search.component.css']
})
export class DishSearchComponent implements OnInit {
  searchResults:any[] = []
  dishSearchForm:string|any = new FormControl('', [Validators.required, Validators.minLength(2)])

  constructor(public dishService:DishService, public homeMenu:HomeComponent) {}

  ngOnInit():void {}

  addToMenu(dishData:any) {
    if (!this.homeMenu.menuItems.includes(dishData) && this.homeMenu.menuItems.length < 4) {
        this.homeMenu.menuItems.push(dishData)
        this.homeMenu.totalPrice += dishData.pricePerServing
        this.homeMenu.updateValueAverages()

        if (this.homeMenu.menuItems.length == 4) {
            if (!this.homeMenu.checkIfMenuIsValid()) {
                Swal.fire("Validación del menu","El menú debe tener 4 platos. Debe haber 2 veganos y 2 que no lo sean.")
            }
        }
    }
  }

  search():any {
    this.searchResults = []
    this.dishService.getDishSearchResults(this.dishSearchForm.value).subscribe(
      (data) => { 
        data.results.forEach((searchResult:any) => { 
          this.dishService.getDishDataById(searchResult.id).subscribe(
            (data) => { 
              this.searchResults.push(data) 
            }
          )
        })
      }
    )
  }
}

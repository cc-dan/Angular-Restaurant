import { Component, OnInit } from '@angular/core';
import DishService from '../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems:any[] = []
  totalPrice:number = 0
  averageHealthScore:number = 0
  averagePrepTime:number = 0

  constructor(public dishService:DishService) { }

  ngOnInit(): void {
    // Empezar con dos platos en el menu
    this.dishService.getRandomDishData().subscribe(
        (data) => {
            data.results.foreach((randomResult:any) => {
                this.menuItems.push(randomResult)
            })
        }
    )

    this.menuItems.forEach((data) => { this.totalPrice += data.pricePerServing })
    this.updateValueAverages()
  }

  checkIfMenuIsValid():Boolean {
    let veganDishes = 0

    this.menuItems.forEach((data) => {
        console.log(data, data.vegan)
        if (data.vegan) { veganDishes++ }
    })

    if (veganDishes == 2) { return true }

    return false
  }

  updateValueAverages() {
    this.averageHealthScore = 0
    this.averagePrepTime = 0

    if (this.menuItems.length == 0) { return }

    this.menuItems.forEach((data) => {
        this.averageHealthScore += data.healthScore
        this.averagePrepTime += data.readyInMinutes
    })

    this.averageHealthScore /= this.menuItems.length
    this.averagePrepTime /= this.menuItems.length
  }

  deleteDish(dishData:any) {
    this.menuItems.splice(this.menuItems.indexOf(dishData), 1)
    this.totalPrice -= dishData.pricePerServing
    this.updateValueAverages()
  }
}

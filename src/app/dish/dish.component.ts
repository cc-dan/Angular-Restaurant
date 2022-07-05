import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() data:any
  @Input() priceBreakdown?:any
  @Input() buttonText?:string
  @Output() dishEmitter = new EventEmitter<any>()

  constructor() { }

  ngOnInit():void { }

  emitDish(dishData:any) {
    this.dishEmitter.emit(dishData)
  }
}

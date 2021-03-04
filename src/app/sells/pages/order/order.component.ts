import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sells.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  is_upper: boolean = true;
  order_by: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green Lattern',
      fly: true,
      color: Color.green
    }
  ]
  
  change(): void {
    this.is_upper = !this.is_upper;
  }

  change_order_by(term: string): void {
    this.order_by = term;
  }
  

}

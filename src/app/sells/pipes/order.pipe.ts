import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sells.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Heroe[], orderBy: string = '' ): Heroe[] {
    switch (orderBy) {
      case 'name':
        return value.sort( (a, b) => (a.name > b.name) ? 1 : -1 );
      case 'fly':
        return value.sort( (a, b) => (a.fly > b.fly) ? -1 : 1 );
      case 'color':
        return value.sort( (a, b) => (a.color > b.color) ? 1 : -1 );
      default:
        return value;
    }
  }
}

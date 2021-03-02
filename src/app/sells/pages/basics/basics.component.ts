import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  name_lower: string = 'string test';
  name_upper: string = 'STRING TEST';
  name_full: string = 'sTriNg tEsT';

  date: Date = new Date(); // Today date

}

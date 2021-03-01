import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'joel glez';
  value: number = 1000;
  obj = {
    name: 'Joel Glez'
  }

  show_name(): void {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}

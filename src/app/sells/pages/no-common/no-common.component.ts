import { Component } from '@angular/core';
import { interval, range } from 'rxjs';
import { Person } from '../../interfaces/sells.interface';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent {

  // Gral
  people: Person[] = [
    {name: 'Joel', gender: 'male'},
    {name: 'Begoña', gender: 'female'},
    {name: 'Pedro', gender: 'male'},
    {name: 'Maria', gender: 'female'},
    {name: 'Juana', gender: 'female'},
    {name: 'Felipe', gender: 'male'}
  ];
  
  // i18nSelect
  obj_map = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  // i18nPlural
  obj_map_plural = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente esperando',
    '=2': 'hay dos clientes esperando',
    'other': 'hay # clientes esperando'
  }

  // KeyValue
  example_object = {
    name: 'Joel',
    age: '28',
    city: 'Tenerife'
  }

  // Json
  example_array = [
    {
      name: 'Batman',
      can_fly: false
    },
    {
      name: 'Superman',
      can_fly: true
    },
    {
      name: 'WonderWoman',
      can_fly: true
    },
    {
      name: 'Flash',
      can_fly: false
    }
  ]

  // Async
  example_observable = interval(1000); // 0 - 1 - 2 ... 

  example_promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('returned promise data');
    }, 5000);
  });
  

  // Example i18nSelect && i18nPlural
  ex_name: string = 'Joel';
  ex_gender: string = 'male';
  clients: string[] = ['Jose', 'Maria', 'Pedro', 'Helena', 'Ramon'];
  deleted_client: any = '';

  change_person(): void {
    if(this.ex_gender === 'male'){
      this.ex_gender = 'female';
      this.ex_name = 'Maria'
    } else {
      this.ex_gender = 'male';
      this.ex_name = 'Joel';
    }   
  }

  delete_person(): void {
    if(this.clients.length !== 0) {
      this.deleted_client = this.clients.pop();
    }
  }

}

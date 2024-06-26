import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {

  private name?: String
  private surname?: String

  constructor(route: ActivatedRoute) {
    route.params.subscribe(
      params => {
        console.log(params['name'])
        console.log(params['surname'])
        this.name = params['name']
        this.surname = params['surname']
      }
    );
  }

  get getName():String | undefined{
    return this.name
  }

  get getSurname(): String | undefined {
    return this.surname
  }

}

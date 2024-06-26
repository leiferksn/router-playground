import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container/container.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'router-playground';

  private order?: String
  
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(
      qp => {
        console.log(qp['order'])
        this.order = qp['order']
      }
    );
  }

  get getOrder(): String | undefined {
    return this.order
  }
}

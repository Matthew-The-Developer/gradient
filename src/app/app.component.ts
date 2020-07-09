import { Component, OnInit } from '@angular/core';
import { Gradient } from './models/gradient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  angularMaterial: Gradient = { rotation: 0, colors: [ '#DD0031', '#3F51B5' ] };
  backgound: Gradient = { rotation: 0, colors: [ '#ff6e7f', '#bfe9ff' ] };
  multi: Gradient = { rotation: 0, colors: [ '#A770EF', '#CF8BF3', '#FDB99B' ] };
  rotatable: Gradient = { rotation: 45, colors: [ '#5C258D', '#4389A2' ] };
  text: Gradient = { rotation: 0, colors: [ '#3CA55C', '#B5AC49' ] };
  icon: Gradient = { rotation: 0, colors: [ '#4CA1AF', '#C4E0E5' ] };
  toolbar: Gradient = { rotation: 90, colors: [ '#0B486B', '#F56217' ] };
}

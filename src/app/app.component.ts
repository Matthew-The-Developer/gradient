import { Gradient } from './gradient.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gradient';
  gradient: Gradient = { rotation: 0, colors: [ '#DD0031', '#3F51B5' ] };
}

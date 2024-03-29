import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private app:AppComponent) {}

  navStatus() {
    if (this.app.nav_state) {
      return "open"
    } else {
      return "closed"
    }
  }
}

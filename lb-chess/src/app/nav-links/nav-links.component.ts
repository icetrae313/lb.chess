import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {
  constructor(private app:AppComponent) {}

  navStatus() {
    if (this.app.nav_state) {
      return "open"
    } else {
      return "closed"
    }
  }
}

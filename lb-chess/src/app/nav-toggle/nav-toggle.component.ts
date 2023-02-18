import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-toggle',
  templateUrl: './nav-toggle.component.html',
  styleUrls: ['./nav-toggle.component.css']
})
export class NavToggleComponent {
  constructor(private app:AppComponent) {}
  
  toggleNav() {
    this.app.toggleNav()
  }
  
  navStatus() {
    if (this.app.nav_state) {
      return "open"
    } else {
      return "closed"
    }
  }

}

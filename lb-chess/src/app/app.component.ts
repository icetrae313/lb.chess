import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title =  'lb-chess'
  nav_state = false
  toggleNav() {
    this.nav_state = ! this.nav_state
    console.log(this.nav_state)
  }
}

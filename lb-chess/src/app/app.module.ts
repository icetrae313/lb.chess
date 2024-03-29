import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavToggleComponent } from './nav-toggle/nav-toggle.component';
import { MainComponent } from './main/main.component';
import { NavLinksComponent } from './nav-links/nav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavToggleComponent,
    MainComponent,
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoteriaComponent } from './components/loteria/loteria.component';


//RUTAS
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/include/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoteriaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

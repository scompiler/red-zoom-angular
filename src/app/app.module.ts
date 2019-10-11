import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRedZoomModule } from 'ngx-red-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRedZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanitizerLibModule } from 'sanitizer-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SanitizerLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

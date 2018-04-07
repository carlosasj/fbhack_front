import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgmatModule } from './ngmat/ngmat.module';
import { SearchSpecialistModule } from './search-specialist/search-specialist.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmatModule,
    SearchSpecialistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

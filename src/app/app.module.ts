import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgmatModule } from './ngmat/ngmat.module';
import { SearchSpecialistModule } from './search-specialist/search-specialist.module';
import { SpecialistScreenComponent } from './specialist-screen/specialist-screen.component';
import { SpecialistScreenModule } from './specialist-screen/specialist-screen.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmatModule,
    SearchSpecialistModule,
    SpecialistScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DishComponent } from './dish/dish.component';
import { HomeComponent } from './home/home.component';
import { DishSearchComponent } from './dish-search/dish-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DishComponent,
    HomeComponent,
    DishSearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

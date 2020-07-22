import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Importing FontAwesome */
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountDetailsComponent } from './home/account-details/account-details.component';
import { HomeComponent } from './home/home.component';
import { TasksSectionComponent } from './home/account-details/tasks-section/tasks-section.component';
import { TaskComponent } from './home/account-details/tasks-section/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountDetailsComponent,
    HomeComponent,
    TasksSectionComponent,
    TaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

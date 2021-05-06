import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeCardComponent } from './shared-components/employee-card/employee-card.component';
import { EmployeeProfileComponent } from './shared-components/employee-profile/employee-profile.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { AgePipe } from './pages/pipes/age.pipe';
import { HeaderComponent } from './header/header/header.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeCardComponent,
    EmployeeProfileComponent,
    PageNotFoundComponent,
    AgePipe,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

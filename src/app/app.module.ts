import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeCardComponent } from './shared-components/employee-card/employee-card.component';
import { EmployeeProfileComponent } from './shared-components/employee-profile/employee-profile.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { AgePipe } from './pages/pipes/age.pipe';
import { HeaderComponent } from './header/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterNewformComponent } from './pages/register/register-newform/register-newform.component';
import { ButtonHoverDirective } from './pages/directives/button-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeCardComponent,
    EmployeeProfileComponent,
    PageNotFoundComponent,
    AgePipe,
    HeaderComponent,
    AboutComponent,
    RegisterNewformComponent,
    ButtonHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

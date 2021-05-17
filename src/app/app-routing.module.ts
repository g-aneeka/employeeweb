import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNewformComponent } from './pages/register/register-newform/register-newform.component';
import { EmployeeCardComponent } from './shared-components/employee-card/employee-card.component';
import { EmployeeProfileComponent } from './shared-components/employee-profile/employee-profile.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile/:id',
    component: EmployeeProfileComponent
  },
  {
    path: 'register',
    component: RegisterNewformComponent
  },
  {
    path: '**' ,
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';

const routes: Routes = [

  // {
  //   path:'',redirectTo:'signin',pathMatch:'full',
  // },

  {
    path:'',redirectTo:'signin',pathMatch:'full'

  },

  {
    path:'signin',component:SigninComponent,
  },

  {
    path:'login', component: LoginComponent, 
  },
  
  {
    path:'home', component : HomeComponent,
  },
  
  {
    path:'register', component: RegisterComponent,
  },
  
  {
    path:'logoff', component : LogoffComponent,
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

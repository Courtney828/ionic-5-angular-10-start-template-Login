import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{LoginComponent}from './login/login.component';
import{HomeComponent}from './home/home.component';
import{RegistrationComponent}from './registration/registration.component';
import{ForgotpasswordComponent}from './forgotpassword/forgotpassword.component';


const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'',component:HomeComponent},
  {path:'registation',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'Forgotpassword',component:ForgotpasswordComponent}
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

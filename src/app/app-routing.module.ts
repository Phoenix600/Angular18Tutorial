import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"beans",loadChildren:()=>import ('./beans/beans.module').then((child)=>child.BeansModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

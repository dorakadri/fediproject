import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { HomeVisiteurComponent } from './home-visiteur/home-visiteur.component';
import { VisiteurComponent } from './visiteur.component';

const routes: Routes = [
  { path: '', component: VisiteurComponent ,
  children:[ 
  {path:'',component: HomeVisiteurComponent},
  {path:'Accueil',component: HomeVisiteurComponent},
  {path:'apropos', component: AproposComponent} 
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteurRoutingModule { }

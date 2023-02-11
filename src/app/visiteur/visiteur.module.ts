import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiteurRoutingModule } from './visiteur-routing.module';
import { VisiteurComponent } from './visiteur.component';
import { HomeVisiteurComponent } from './home-visiteur/home-visiteur.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';


@NgModule({
  declarations: [
    VisiteurComponent,
    HomeVisiteurComponent,
    AproposComponent,
    DetailFilmComponent
  ],
  imports: [
    CommonModule,
    VisiteurRoutingModule
  ]
})
export class VisiteurModule { }

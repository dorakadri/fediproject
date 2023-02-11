import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ModifierComponent } from './modifier/modifier.component';



@NgModule({
  declarations: [
    AdminComponent,
    ListComponent,
    AddComponent,
    DetailFilmComponent,
    ModifierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,


  ]
})
export class AdminModule { }

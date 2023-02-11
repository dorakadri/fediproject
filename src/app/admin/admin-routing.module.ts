import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ListComponent } from './list/list.component';
import { ModifierComponent } from './modifier/modifier.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    {path :'', redirectTo : 'list', pathMatch:'full'},
  {path:'list',component: ListComponent},
  {path:'add', component: AddComponent},
  {path:'details/:id', component: DetailFilmComponent},

  {path:'modifier/:id', component: ModifierComponent}


 ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

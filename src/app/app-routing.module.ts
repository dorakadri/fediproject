import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes =
 [ 
{ path: 'visiteur', loadChildren: () => import('./visiteur/visiteur.module').then(m => m.VisiteurModule) }, 
{path :'', redirectTo : 'visiteur', pathMatch:'full'},

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{path:'**',component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

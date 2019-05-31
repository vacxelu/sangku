import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home', loadChildren:'./home/home.module#HomeModule'
  },
  {
    path: 'admin', loadChildren:'./admin/admin.module#AdminModule'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

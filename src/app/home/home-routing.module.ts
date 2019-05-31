import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChiTietComponent } from './trang-chu/chi-tiet/chi-tiet.component';
import { AuthGuardGuard } from '../_core/guards/auth-guard.guard';
import { TinTucConComponent } from './trang-chu/tin-tuc-con/tin-tuc-con.component';
const webRouting: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', loadChildren: './trang-chu/trang-chu.module#TrangChuModule'
      },
      {
        path: 'chi-tiet/:id', component: ChiTietComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'phong-ve/:id', loadChildren: './trang-chu/phong-ve/phong-ve.module#PhongVeModule',
        
      },
      {
        path: 'form', loadChildren: './trang-chu/form/form.module#FormModule'
      },
      {
        path: 'tin-tuc/:id', component:TinTucConComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(webRouting),
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

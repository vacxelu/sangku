import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { CanDeactivateGuard } from '../../../_core/guards/candeactive.guard';
import { CantLoginGuard } from 'src/app/_core/guards/cant-login.guard';

const routes: Routes = [
  {
    path: '', component: FormComponent, children: [
      {
        // path: 'dang-ky',component:DangKyComponent,canDeactivate: [CanDeactivateGuard],canActivate:[CantLoginGuard]
        path: 'dang-ky',component:DangKyComponent,canActivate:[CantLoginGuard]
      
      },
      {
        path: 'login',component:DangNhapComponent , canActivate:[CantLoginGuard]
      }
      
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class FormRoutingModule { }

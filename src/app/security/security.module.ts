import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SecurityRouting} from './security.routing';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SecurityRouting,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }

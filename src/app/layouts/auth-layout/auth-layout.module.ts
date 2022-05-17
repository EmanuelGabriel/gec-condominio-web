import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthLayoutRoutes } from './auth-layout.routing';
import { PagesModule } from '../../pages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    PagesModule
    // NgbModule
  ],
  declarations: []
})
export class AuthLayoutModule { }

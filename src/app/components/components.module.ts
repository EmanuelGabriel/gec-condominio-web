import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';
import { CardStateComponent } from './card-state';
import { InfoAlertsComponent } from './alerts/info';
import { WarningAlertsComponent } from './alerts/warning';
import { ErroAlertComponent } from './alerts/erro';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStateComponent,
    InfoAlertsComponent,
    WarningAlertsComponent,
    ErroAlertComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStateComponent,
    InfoAlertsComponent,
    ErroAlertComponent,
    WarningAlertsComponent
  ],
  providers:[]
})
export class ComponentsModule { }

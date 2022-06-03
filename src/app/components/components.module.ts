import { BarChartVeiculosBlocosComponent } from './bar-chart-veiculos-blocos/bar-chart-veiculos-blocos.component';

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
import { NgxLoadingModule } from 'ngx-loading';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgxLoadingModule,
    NgApexchartsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStateComponent,
    InfoAlertsComponent,
    WarningAlertsComponent,
    ErroAlertComponent,
    BarChartVeiculosBlocosComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStateComponent,
    InfoAlertsComponent,
    ErroAlertComponent,
    WarningAlertsComponent,
    BarChartVeiculosBlocosComponent
  ],
  providers:[]
})
export class ComponentsModule { }

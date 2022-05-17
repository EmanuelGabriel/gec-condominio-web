import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the modul
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgApexchartsModule } from 'ng-apexcharts';

import { LoginComponent } from './login';
import { ComponentsModule } from '../components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { VisitasApartamentoLineChartComponent } from './dashboard/visitas-apartamento-line-chart/visitas-apartamento-line-chart.component';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule, // adicionar módulo
    AutocompleteLibModule,
    ReactiveFormsModule,
    OrderModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgApexchartsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    LineChartComponent,
    VisitasApartamentoLineChartComponent,
    VeiculosPesquisaComponent,
    CadastrarVeiculoComponent,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class PagesModule { }

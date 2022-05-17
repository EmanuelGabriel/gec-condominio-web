import { CadastrarVeiculoComponent } from './../../pages/cadastrar-veiculo/cadastrar-veiculo.component';
import { VeiculosPesquisaComponent } from "./../../pages/veiculos-pesquisa/veiculos-pesquisa.component";
import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "veiculos", component: VeiculosPesquisaComponent },
  { path: "novo-veiculo", component: CadastrarVeiculoComponent },
];

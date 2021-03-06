import { ControleAcessoFiltro } from './../../models/ControleAcessoFiltro';
import { VeiculoModel } from './../../models/VeiculoModel';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { VeiculosService } from 'src/app/service/veiculos.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';


@Component({
  selector: "app-veiculos-pesquisa",
  templateUrl: "./veiculos-pesquisa.component.html",
  styleUrls: ["./veiculos-pesquisa.component.scss"],
})
export class VeiculosPesquisaComponent implements OnInit {

  //page = 0;
  //pageSize = 5;
  @Input()
  isLoading:boolean;


  veiculos: VeiculoModel[] = [];
  filtro = new ControleAcessoFiltro();
  page: number;
  size: number;
  collectionSize: number;
  pageSizesList: number[];
  isLoadingTabelaVeiculos: boolean;
  isLoadingTotalVeiculos: boolean;

  bloco: string;
  numeroApartamento: string;

  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  // blocos
  blocos = [
    { valor: 'A', label: 'A'},
    { valor: 'B', label: 'B'},
    { valor: 'C', label: 'C'},
    { valor: 'D', label: 'D'},
    { valor: 'E', label: 'E'},
    { valor: 'F', label: 'F'},
    { valor: 'G', label: 'G'},
    { valor: 'H', label: 'H'},
    { valor: 'I', label: 'I'}
  ]

  // números dos apartamentos
  numerosApto = [
    { valor: '201', label: '201'},
    { valor: '202', label: '202'},
    { valor: '203', label: '203'},
    { valor: '204', label: '204'},
    { valor: '205', label: '205'},
    { valor: '206', label: '206'},
    { valor: '207', label: '207'},
    { valor: '208', label: '208'},
    { valor: '301', label: '301'},
    { valor: '302', label: '302'},
    { valor: '303', label: '303'},
    { valor: '304', label: '304'},
    { valor: '305', label: '305'},
    { valor: '306', label: '306'},
    { valor: '307', label: '307'},
    { valor: '308', label: '308'},
  ]



  constructor(
    private title: Title,
    private router: Router,
    private spinner: NgxSpinnerService,
    private veiculosService: VeiculosService) {

      this.page = 1;
      this.size = 5;
      this.pageSizesList = [5, 10, 20, 30];

      this.pesquisar();
    }

  ngOnInit() {
    this.title.setTitle("Consulta de Veículos");

  }

  pesquisar() {
    this.spinner.show();
    this.isLoadingTabelaVeiculos = true;
    this.isLoadingTotalVeiculos = true;

    this.veiculosService.filtroControleAcesso(this.filtro, this.page, this.size).subscribe(
      (resp) => {
        console.log(this.filtro);
        this.veiculos = resp.content;
        this.collectionSize = resp.totalElements;
        console.log(resp);

        this.isLoadingTabelaVeiculos = false;
        this.isLoadingTotalVeiculos = false;

      },
      (err) => {
        this.spinner.hide();
        this.isLoadingTabelaVeiculos = false;
        this.isLoadingTotalVeiculos = false;
      },
      () => {
        this.spinner.hide();
        this.isLoadingTabelaVeiculos = false;
        this.isLoadingTotalVeiculos = false;
      }
    );
  }

  /**
   *
   * @param event
   */
  handlePageSizeChange(event){
    this.size = event;
    this.pesquisar();
  }


  irParaPaginaCadastroVeiculo(){
    this.router.navigate(["/novo-veiculo"]);
  }



}

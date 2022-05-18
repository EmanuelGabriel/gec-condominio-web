import { ControleAcessoFiltro } from './../../models/ControleAcessoFiltro';
import { VeiculoModel } from './../../models/VeiculoModel';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { VeiculosService } from 'src/app/service/veiculos.service';


@Component({
  selector: "app-veiculos-pesquisa",
  templateUrl: "./veiculos-pesquisa.component.html",
  styleUrls: ["./veiculos-pesquisa.component.scss"],
})
export class VeiculosPesquisaComponent implements OnInit {

  //page = 0;
  //pageSize = 5;

  veiculos: VeiculoModel[] = [];
  filtro = new ControleAcessoFiltro();
  page = 0;
  size = 5;
  collectionSize: number;

  bloco: string;
  numeroApartamento: string;

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

      this.pesquisar();
    }

  ngOnInit() {
    this.title.setTitle("Consulta de Veículos");

  }

  pesquisar() {
    this.spinner.show();
    this.veiculosService.filtroControleAcesso(this.filtro, (this.page -1), this.size).subscribe(
      (resp) => {
        console.log(this.filtro);
        this.veiculos = resp.content;
        this.collectionSize = resp.totalElements;
        console.log(resp);

      },
      (err) => {
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  /**
  buscarTodosVeiculos(){
    this.spinner.show();
    this.veiculosService.buscarVeiculos((this.page -1), this.size).subscribe((resp) => {

      console.log(resp);
      this.veiculos = resp.content;
      this.collectionSize = resp.totalElements;

    },
    (err) => {
      this.spinner.hide();
    },
    () => {
      this.spinner.hide();
    }
  );
  } */


  irParaPaginaCadastroVeiculo(){
    this.router.navigate(["/novo-veiculo"]);
  }

  carregarDadosVeiculos() {
    //this.spinner.show();
    //this.controleAcessos = DADOS
      //.map((veiculos, i) => ({id: i + 1, ...veiculos}))
      //.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      //this.spinner.hide();
      //console.log(this.controleAcessos);
  }



}

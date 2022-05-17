import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.scss']
})
export class CadastrarVeiculoComponent implements OnInit {

  constructor(
    private title: Title,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.title.setTitle('Novo Veículo');
  }

}

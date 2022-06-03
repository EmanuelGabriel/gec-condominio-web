import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { ControleAcessoChart } from 'src/app/models/ControleAcessoChart';
import { VeiculosService } from 'src/app/service/veiculos.service';


const ngbModalOptions: NgbModalOptions = {
  backdrop: 'static',
  keyboard: false
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('ngxLoading', { static: false }) ngxLoadingComponent: NgxLoadingComponent;

  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;


  constructor(
    private title: Title,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private veiculoService: VeiculosService
  ) { }

  ngOnInit() {
    this.title.setTitle("Dashboard");
  }



}

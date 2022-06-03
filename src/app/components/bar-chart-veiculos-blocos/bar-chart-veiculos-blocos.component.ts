import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type BarChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: any[];
};


interface ControleAcessoQtd {
  bloco: string;
  quantidade: number;
}


@Component({
  selector: 'app-bar-chart-veiculos-blocos',
  templateUrl: './bar-chart-veiculos-blocos.component.html',
  styleUrls: ['./bar-chart-veiculos-blocos.component.scss']
})
export class BarChartVeiculosBlocosComponent implements OnInit {

  @Input()
  qtds: ControleAcessoQtd[];

  @Input()
  bloco: string;

  @Output()
  chosedUg = new EventEmitter();

  BarChartOptions: Partial<BarChartOptions>;

  constructor() {
  }

  ngOnInit() {
  }



}

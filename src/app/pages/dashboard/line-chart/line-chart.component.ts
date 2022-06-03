import { VeiculosService } from 'src/app/service/veiculos.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexNoData,
  ApexTitleSubtitle,
  ApexResponsive,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

import { ControleAcessoChart } from 'src/app/models/ControleAcessoChart';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  //series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  noData: ApexNoData;
  colors: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: string[];
};

type StatusColors = {
  bloco: string;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  isLoadingChart: boolean;
  listaChart: ControleAcessoChart[] = [];
  bloco: string;

  constructor(
    private veiculoService: VeiculosService) {

    this.carregarDadosQtdVeiculosPorBloco();

  }


  ngOnInit(): void {
  }


  /**
   * Loading dos dados da quantidade de veículos por
  */
  carregarDadosQtdVeiculosPorBloco(){
    this.isLoadingChart = true;
    this.veiculoService.buscarQuantidadeVeiculosPorBlocos().subscribe(resp => {

      this.listaChart = resp;
      this.bloco = resp.bloco;
      console.log(this.bloco);
      console.log(this.listaChart);

      this.chartOptions = {
        series: [
          {
            name: "Quantidade",
            data: this.listaChart.map((dados) => dados.qtdVeiculos),
            //color: '#60e063'
          }
        ],
        noData: {
          text: 'Nenhuma informação encontrada!'
        },
        chart: {
          type: "bar",
          width: "100%",
          height: 300,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: true
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            distributed: true
          }
        },

        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: this.listaChart.map((bl) => `Bloco: ${bl.bloco}`),
        },
        colors: this.listaChart.map((cor) => {
          console.log(cor);
          switch(cor.bloco){
            case "A":
              return '#e91e63'
            case "B":
              return '#00e396'
            case "C":
                return '#f7d978'
            case "D":
                return '#008ffb'
            case "E":
                return '#9a5b1c'
            case "F":
                return '#bdbcbb'
          };
        }),
        yaxis: {
          title: {
            text: "Blocos"
          }
        },
        fill: {
          opacity: 1,
        },
      };
    },
    () => {
      this.isLoadingChart = false;
    },
    () => {
      this.isLoadingChart = false;
    }
    );
  }

  /**
   * Pegar as cores por blocos
   */
   getCoresPorBlocos(){
    switch (this.bloco){
      case "A":
        return ['#e91e63']
      case "B":
        return ['#00e396']
      case "C":
        return ['#f7d978']
      case "D":
        return ['#008ffb']
      case "E":
        return ['#9a5b1c']
      case "F":
        return ['#bdbcbb']
  }
}

}




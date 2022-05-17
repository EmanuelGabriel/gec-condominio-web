import { Component, OnInit, ViewChild } from '@angular/core';

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
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-visitas-apartamento-line-chart',
  templateUrl: './visitas-apartamento-line-chart.component.html',
  styleUrls: ['./visitas-apartamento-line-chart.component.scss']
})
export class VisitasApartamentoLineChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Apto 201",
          data: [44]
        },
        {
          name: "Apto 202",
          data: [10]
        },
        {
          name: "Apto 203",
          data: [15]
        },
        {
          name: "Apto 204",
          data: [12]
        }
      ],
      chart: {
        type: "bar",
        width: "100%",
        height: 300,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
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
        categories: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ]
      },
      yaxis: {
        title: {
          text: "Apartamentos"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }


}

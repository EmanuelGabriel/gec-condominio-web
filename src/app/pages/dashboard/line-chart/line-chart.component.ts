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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Bloco A",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Bloco B",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Bloco C",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        },
        {
          name: "Bloco D",
          data: [15, 11, 16, 19, 11, 20, 14, 53, 10]
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
          text: "Veículos"
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


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}



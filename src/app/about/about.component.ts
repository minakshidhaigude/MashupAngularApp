import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { CurrencyService } from '../currency.service';
Chart.register(...registerables);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private chartService: CurrencyService) {}
  chartData: any;
  yearData: any[] = [];
  amountData: any[] = [];
  colorData: any[] = [];

  ngOnInit(): void {
    this.chartService.getChartInfo().subscribe((result) => {
      this.chartData = result;
      //console.log('chartdata', this.chartData);
      if (this.chartData != null) {
        for (let i = 0; i < this.chartData.length; i++) {
          //console.log(this.chartData[i]);
          this.yearData.push(this.chartData[i].year);
          this.amountData.push(this.chartData[i].amount);
          this.colorData.push(this.chartData[i].colorcode);
        }
        this.RenderChart(
          this.yearData,
          this.amountData,
          this.colorData,
          'bar',
          'barchart'
        );
        this.RenderChart(
          this.yearData,
          this.amountData,
          this.colorData,
          'pie',
          'piechart'
        );
        this.RenderChart(
          this.yearData,
          this.amountData,
          this.colorData,
          'doughnut',
          'doughnutchart'
        );
        this.RenderChart(
          this.yearData,
          this.amountData,
          this.colorData,
          'polarArea',
          'polarchart'
        );
        this.RenderChart(
          this.yearData,
          this.amountData,
          this.colorData,
          'radar',
          'radarchart'
        );
      }
      this.RenderBubbleChart();
      this.RenderScatterChart();
    });
  }
  RenderChart(
    yearData: any,
    amountData: any,
    colorData: any,
    type: any,
    id: any
  ) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: yearData,
        datasets: [
          {
            label: '# of Votes',
            data: amountData,
            backgroundColor: colorData,
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  RenderBubbleChart() {
    const data = {
      datasets: [
        {
          label: 'First Dataset',
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 40,
              y: 10,
              r: 10,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };
    const myChart = new Chart('bubblechart', {
      type: 'bubble',
      data: data,
      options: {},
    });
  }
  RenderScatterChart() {
    const data = {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };
    const myChart = new Chart('scatterchart', {
      type: 'scatter',
      data: data,
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
      },
    });
  }
}

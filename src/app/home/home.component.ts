import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private currencysvc: CurrencyService) {}
  covidData: any;
  stateInfo: any[] = [];
  total_active: number = 0;
  total_confirmed: number = 0;
  total_deaths: number = 0;
  total_recovered: number = 0;
  states: any[] = [];
  confirmed: any[] = [];
  recovered: any[] = [];
  deaths: any[] = [];

  ngOnInit(): void {
    this.currencysvc.getCovidInfo().subscribe((data) => {
      console.log('covidData', data);

      this.covidData = data;
      for (let index = 0; index < this.covidData.statewise.length; index++) {
        this.states.push(this.covidData.statewise[index].state);
        this.confirmed.push(this.covidData.statewise[index].confirmed);
        this.recovered.push(this.covidData.statewise[index].recovered);
        this.deaths.push(this.covidData.statewise[index].deaths);
      }
      this.states.shift();
      this.confirmed.shift();
      this.recovered.shift();
      this.deaths.shift();
      console.log('state array', this.states);
      console.log('confirmed ', this.confirmed);

      this.total_active = this.covidData.statewise[0].active;
      this.total_confirmed = this.covidData.statewise[0].confirmed;
      this.total_deaths = this.covidData.statewise[0].deaths;
      this.total_recovered = this.covidData.statewise[0].recovered;

      this.RenderChart(
        this.states,
        this.confirmed,
        this.recovered,
        this.deaths
      );
    });
  }

  RenderChart(states: any, confirmed: any, recovered: any, deaths: any) {
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: states,
        datasets: [
          {
            label: 'Confirmed Cases',
            data: confirmed,
            backgroundColor: '#0000FF',
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            backgroundColor: '#00FF00',
          },
          {
            label: 'Deceased',
            data: deaths,
            backgroundColor: '#FF0000',
          },
        ],
      },
      options: {},
    });
  }
}

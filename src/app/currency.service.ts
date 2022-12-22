import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getCurrency(country1: string) {
    let url = 'https://api.exchangerate.host/latest?base=' + country1;
    return this.http.get(url);
  }
  getChartInfo() {
    return this.http.get('http://localhost:3000/sales');
  }
  getCovidInfo() {
    return this.http.get('https://data.covid19india.org/data.json');
  }
}

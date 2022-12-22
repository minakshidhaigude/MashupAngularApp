import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  currjson: any = [];
  base: string = 'USD';
  country: string = 'USD';
  result: string = '1';
  constructor(private svc: CurrencyService) {}

  ngOnInit(): void {}
  changebase(event: any) {
    this.base = event.target.value;
    console.log('base value', this.base);
  }
  tocountry(event: any) {
    this.country = event.target.value;
    // console.log(this.country);
  }
  convert() {
    // console.log('**', this.base);
    // console.log(this.country);
    this.svc.getCurrency(this.base).subscribe((data) => {
      console.log('currency data', data);
      // use of JSON is to exchange data to/from web server
      // when sending data to web server, the data has to be string
      // so convert js object into string using JSON.stringify()
      this.currjson = JSON.stringify(data);
      //When receiving data from a web server, the data is always a string.
      //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
      this.currjson = JSON.parse(this.currjson);
      console.log('**', this.currjson);
      if (this.country == 'USD') {
        this.result = this.currjson.rates.USD;
      }
      if (this.country == 'INR') {
        this.result = this.currjson.rates.INR;
      }
      if (this.country == 'EUR') {
        this.result = this.currjson.rates.EUR;
      }
    });
  }
}

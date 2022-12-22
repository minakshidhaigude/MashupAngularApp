import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  toshow: any = '0';
  currentval: any = '';
  constructor() {}

  ngOnInit(): void {}
  writetoinput(value: string) {
    this.currentval = this.currentval + value;
    this.toshow = this.currentval;
  }
  equals() {
    this.toshow = eval(this.currentval);
    //current value is not updated so we need to update
    this.currentval = this.toshow;
  }
  clear() {
    this.currentval = '';
    this.toshow = '0';
  }
  back() {
    //slice() method returns selected elements in an array, as a new array.
    //Negative numbers select from the end of the array.
    this.currentval = this.currentval.slice(0, -1);
    this.toshow = this.currentval;
    if (this.currentval == '') {
      this.toshow = '0';
    }
  }
  calValue(solve: any) {
    //The charAt() method returns the character at a specified index (position) in a string.
    if (solve.charAt(0) == '0') {
      //start from index '1' to end
      solve = solve.slice(1);
    }
    this.toshow = eval(solve);
  }
}

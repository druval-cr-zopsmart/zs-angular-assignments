import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  payload: number = 0;
  payloadOptions: { label: string, value: number }[] = [
    { label: 'One', value: 1 }, 
    { label: 'Two', value: 2 }, 
    { label: 'Five', value: 5 }
  ];

  currentCount: number = 0;
  countInputDisable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  payloadUpdate(value: number) {
    this.payload = value;
  }

  updateCount(action: string) {
    switch (action) {
      case 'ADD':
        this.currentCount = this.currentCount + this.payload;
        break;
      case 'SUBTRACT':
        this.currentCount = this.currentCount - this.payload;
        break;
      default: break;
    }
  }

  toggleCountInput() {
    this.countInputDisable = !this.countInputDisable;
  }
}

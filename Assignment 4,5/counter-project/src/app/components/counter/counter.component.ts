import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() payload!: number;
  currentCount: number = 0;
  countInputDisable: boolean = false;

  constructor() { }

  ngOnInit(): void {
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

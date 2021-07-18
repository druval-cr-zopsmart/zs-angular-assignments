import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() payload!: number;
  currentCount: number = 0;
  @ViewChild('countInputRef') countInputElementRef!: ElementRef;
  @ViewChild('toggleButtonRef') toggleButtonElementRef!: ElementRef; 

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
    const isDisabledInput: boolean = this.countInputElementRef.nativeElement.disabled;
    if (isDisabledInput) this.toggleButtonElementRef.nativeElement.innerText = 'Disable Input';
    else this.toggleButtonElementRef.nativeElement.innerText = 'Enable Input';

    this.countInputElementRef.nativeElement.disabled = !isDisabledInput;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-header',
  templateUrl: './timer-header.component.html',
  styleUrls: ['./timer-header.component.scss']
})
export class TimerHeaderComponent implements OnInit {
  @Output() onTimerUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTimerUpdateClick(event: string) {
    console.log(event);
    this.onTimerUpdate.emit(event);
  }
}

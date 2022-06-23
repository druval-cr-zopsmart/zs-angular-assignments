import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerValue: number = 0;
  timerInterval!: ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit(): void {
  }

  onTimerUpdate(status: string) {
    switch (status) {
      case 'start':
        this.startTimer();
        break;
      case 'stop':
        this.stopTimer();
        break;
      case 'reset':
        this.resetTimer();
        break;
      default:
        break;
    }

  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }
  
  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timerValue += 1;
    }, 1000);
  }

  resetTimer() {
    this.timerValue = 0;
    this.stopTimer();
  }
}

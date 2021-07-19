import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-header',
  templateUrl: './counter-header.component.html',
  styleUrls: ['./counter-header.component.scss']
})
export class CounterHeaderComponent implements OnInit {
  @Input() payloadOptions!: { label: string, value: number }[];
  @Output() onPayloadUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPayloadChange(event: { value: number; }) {
    this.onPayloadUpdate.emit(event.value);
  }
}

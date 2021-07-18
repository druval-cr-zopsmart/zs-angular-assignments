import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  payload: number = 0;
  payloadOptions: { label: string, value: number }[] = [
    { label: 'One', value: 1}, 
    { label: 'Two', value: 2}, 
    { label: 'Five', value: 5}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

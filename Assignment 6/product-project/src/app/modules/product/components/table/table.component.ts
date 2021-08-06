import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import Car from '../../interface/car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  datasource!: Car[];
  cars: Car[] = [];
  totalRecords: number = 0;
  cols!: { field: string; header: string; }[];
  loading!: boolean;

  constructor() { }

  ngOnInit() {
    this.cars = [
      { vin: 'v1', year: 2000, brand: 'b1', color: 'c1'},
      { vin: 'v1', year: 2001, brand: 'b1', color: 'c2'},
      { vin: 'v3', year: 2001, brand: 'b1', color: 'c1'},
      { vin: 'v4', year: 2001, brand: 'b1', color: 'c3'},
      { vin: 'v5', year: 2002, brand: 'b2', color: 'c1'},
      { vin: 'v6', year: 2002, brand: 'b2', color: 'c3'},
      { vin: 'v7', year: 2003, brand: 'b2', color: 'c4'},
      { vin: 'v8', year: 2003, brand: 'b2', color: 'c4'},
      { vin: 'v9', year: 2004, brand: 'b3', color: 'c4'},
      { vin: 'v10', year: 2004, brand: 'b3', color: 'c7'},
      { vin: 'v11', year: 2004, brand: 'b3', color: 'c1'},
      { vin: 'v12', year: 2004, brand: 'b3', color: 'c1'},
    ];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.loading = true;
  }

  // datasource!: Car[];

  // cars!: Car[];

  // totalRecords!: number;

  // cols!: any[];

  // loading!: boolean;

  // constructor() {}

  // ngOnInit() {
  //   //datasource imitation
  //   this.datasource = [
  //     { vin: 'v1', year: 2000, brand: 'b1', color: 'c1' },
  //     { vin: 'v1', year: 2001, brand: 'b1', color: 'c2' },
  //     { vin: 'v3', year: 2001, brand: 'b1', color: 'c1' },
  //     { vin: 'v4', year: 2001, brand: 'b1', color: 'c3' },
  //     { vin: 'v5', year: 2002, brand: 'b2', color: 'c1' },
  //     { vin: 'v6', year: 2002, brand: 'b2', color: 'c3' },
  //     { vin: 'v7', year: 2003, brand: 'b2', color: 'c4' },
  //     { vin: 'v8', year: 2003, brand: 'b2', color: 'c4' },
  //     { vin: 'v9', year: 2004, brand: 'b3', color: 'c4' },
  //     { vin: 'v10', year: 2004, brand: 'b3', color: 'c7' },
  //     { vin: 'v11', year: 2004, brand: 'b3', color: 'c1' },
  //     { vin: 'v12', year: 2004, brand: 'b3', color: 'c1' },
  //   ];
  //   this.totalRecords = this.datasource.length;

  //   this.cols = [
  //     { field: 'vin', header: 'Vin' },
  //     { field: 'year', header: 'Year' },
  //     { field: 'brand', header: 'Brand' },
  //     { field: 'color', header: 'Color' },
  //   ];

  //   this.loading = true;
  // }

  // loadCarsLazy(event: LazyLoadEvent) {
  //   this.loading = true;

  //   //in a real application, make a remote request to load data using state metadata from event
  //   //event.first = First row offset
  //   //event.rows = Number of rows per page
  //   //event.sortField = Field name to sort with
  //   //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //   //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

  //   //imitate db connection over a network
  //   setTimeout(() => {
  //     if (this.datasource) {
  //       this.cars = this.datasource.slice(
  //         event.first,
  //         event.first! + event.rows!
  //       );
  //       this.loading = false;
  //     }
  //   }, 1000);
  // }
}

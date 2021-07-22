import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Output() onFilterProducts = new EventEmitter();
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchClick() {
    const query = this.searchText.trim();
    this.searchText = query;
    this.onFilterProducts.emit(query);
  }
}

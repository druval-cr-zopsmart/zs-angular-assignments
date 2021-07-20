import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Output() onShowAllProducts = new EventEmitter();
  @Output() onFilterProducts = new EventEmitter();
  @ViewChild('searchInputRef') searchInputElementRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchClick() {
    const query = this.searchInputElementRef.nativeElement.value.trim();
    if (query.length > 0) this.onFilterProducts.emit(query);
  }

  onShowAllClick() {
    this.onShowAllProducts.emit();
  }

}

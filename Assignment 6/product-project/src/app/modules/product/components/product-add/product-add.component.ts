import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  name: string = '';
  @Output() onAddProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick() {
    this.name = this.name.trim();
    if (this.name){
      this.onAddProduct.emit(this.name);
      this.name = '';
    }
    else alert('Please add a product');
  }
}

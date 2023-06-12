import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../product.models';

@Component({
  selector: 'sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent {
  @Input() product!: Product;

}

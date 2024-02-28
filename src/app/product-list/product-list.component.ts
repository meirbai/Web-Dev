import {Component, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ProductItemsComponent} from "../product-items/product-items.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, NgIf, ProductItemsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public ty = ''
}

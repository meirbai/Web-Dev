import {Component, QueryList, ViewChildren} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemsComponent} from "./product-items/product-items.component";
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf,ProductListComponent,ProductItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = "Exp"
}

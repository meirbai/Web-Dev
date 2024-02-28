import { Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemsComponent} from "./product-items/product-items.component";

export const routes: Routes = [
    {path:'telefony', component: ProductListComponent},
    {path:':type', component:ProductItemsComponent}
];

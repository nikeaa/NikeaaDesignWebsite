import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseStockComponent } from './purchase-stock.component';


const routes: Routes = [
  { path: '', component: PurchaseStockComponent }
];

@NgModule({
  declarations: [PurchaseStockComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PurchaseStockModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseCustomComponent } from './purchase-custom.component';


const routes: Routes = [
  { path: '', component: PurchaseCustomComponent }
];

@NgModule({
  declarations: [PurchaseCustomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PurchaseCustomModule { }

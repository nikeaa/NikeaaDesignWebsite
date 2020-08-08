
﻿



﻿

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyNewScreenIndexComponent } from './index.component';
import { MyNewScreenCreateComponent } from './create.component';
import { MyNewScreenEditComponent } from './edit.component';
import { MyNewScreenDeleteComponent } from './delete.component';

const routes: Routes = [
  { path: '', component: MyNewScreenIndexComponent },
  { path: 'create', component: MyNewScreenCreateComponent },
  { path: 'edit/:id', component: MyNewScreenEditComponent },
  { path: 'delete/:id', component: MyNewScreenDeleteComponent }
];

@NgModule({
  declarations: [
    MyNewScreenIndexComponent,
    MyNewScreenCreateComponent,
    MyNewScreenEditComponent,
    MyNewScreenDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MyNewScreenIndexModule { }

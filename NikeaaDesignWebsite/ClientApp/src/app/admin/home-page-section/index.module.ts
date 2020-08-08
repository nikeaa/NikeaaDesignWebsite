import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminHomePageSectionIndexComponent } from './index.component';
import { AdminHomePageSectionCreateComponent } from './create.component';
import { AdminHomePageSectionEditComponent } from './edit.component';
import { AdminHomePageSectionDeleteComponent } from './delete.component';


const routes: Routes = [
  { path: '', component: AdminHomePageSectionIndexComponent },
  { path: 'create', component: AdminHomePageSectionCreateComponent },
  { path: 'edit/:id', component: AdminHomePageSectionEditComponent },
  { path: 'delete/:id', component: AdminHomePageSectionDeleteComponent }
];

@NgModule({
  declarations: [
    AdminHomePageSectionIndexComponent,
    AdminHomePageSectionCreateComponent,
    AdminHomePageSectionEditComponent,
    AdminHomePageSectionDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminHomePageSectionIndexModule { }

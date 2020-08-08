import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminTemplateIndexComponent } from './index.component';
import { AdminTemplateCreateComponent } from './create.component';
import { AdminTemplateEditComponent } from './edit.component';
import { AdminTemplateDeleteComponent } from './delete.component';


const routes: Routes = [
  { path: '', component: AdminTemplateIndexComponent },
  { path: 'create', component: AdminTemplateCreateComponent },
  { path: 'edit/:id', component: AdminTemplateEditComponent },
  { path: 'delete/:id', component: AdminTemplateDeleteComponent }
];

@NgModule({
  declarations: [
    AdminTemplateIndexComponent,
    AdminTemplateCreateComponent,
    AdminTemplateEditComponent,
    AdminTemplateDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminTemplateIndexModule { }

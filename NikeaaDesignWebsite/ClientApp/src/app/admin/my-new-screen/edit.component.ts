﻿﻿import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyNewScreen from '../../services/admin/template/record';
import { MyNewScreenService } from '../../services/admin/template/service';
import { ValidationService } from '../../services/validation/validation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-new-screen-edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class MyNewScreenEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: MyNewScreenService,
    private vs: ValidationService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(segment => {
      this.id = parseInt(segment[1].path);
      dataService.getOne(this.id).subscribe(r => {
        this.record = r;
        this.generateForm();
      });
    });
  }

  editForm: FormGroup;
  formSubmitted: boolean = false;
  id: number = -1;
  record: MyNewScreen = null;

  // Properties for getting the form and form fields.
  get form(): FormGroup {
    return this.editForm as FormGroup;
  }
  get title(): FormControl {
    return this.form.controls.title as FormControl;
  }
  get isActive(): FormControl {
    return this.form.controls.isActive as FormControl;
  }

  ngOnInit() {
    AppComponent.component.loadingIndicatorOff();
  }

  onCancelClick() {
    this.dataService.navigateToIndex();
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.editForm.valid) {
      AppComponent.component.loadingIndicatorOn();
      this.dataService.update(this.id, this.dataService.buildServiceObject(this.editForm)).subscribe(i => {
        this.formSubmitted = false;
        this.dataService.navigateToIndex();
      });
    }
  }

  generateForm() {
    this.editForm = this.formBuilder.group({
      title: new FormControl(this.record.title, [Validators.required]),
      isActive: new FormControl(this.record.isActive, [Validators.required])
    });
  }
}

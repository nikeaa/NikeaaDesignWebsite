import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminTemplateService } from '../../services/admin/template/service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'app-admin-template-create-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class AdminTemplateCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: AdminTemplateService,
    private vs: ValidationService,
  ) {
    this.generateForm();
  }

  createForm: FormGroup;
  formSubmitted: boolean = false;

  // Properties for getting the form and form fields.
  get form(): FormGroup {
    return this.createForm as FormGroup;
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
    if (this.createForm.valid) {
      AppComponent.component.loadingIndicatorOn();
      this.dataService.insert(this.dataService.buildServiceObject(this.createForm)).subscribe(i => {
        this.formSubmitted = false;
        this.dataService.navigateToIndex();
      });
    }
  }

  generateForm() {
    this.createForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required])
    });
  }
}

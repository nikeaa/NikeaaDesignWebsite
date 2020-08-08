import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminHomePageSectionService } from '../../services/admin/home-page-section/service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'app-admin-home-page-section-create-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class AdminHomePageSectionCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: AdminHomePageSectionService,
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
  get description(): FormControl {
    return this.form.controls.description as FormControl;
  }
  get image(): FormControl {
    return this.form.controls.image as FormControl;
  }
  get linkUrl(): FormControl {
    return this.form.controls.linkUrl as FormControl;
  }
  get isActive(): FormControl {
    return this.form.controls.isActive as FormControl;
  }
  get sortOrder(): FormControl {
    return this.form.controls.sortOrder as FormControl;
  }
  get textAlign(): FormControl {
    return this.form.controls.textAlign as FormControl;
  }
  get textColor(): FormControl {
    return this.form.controls.textColor as FormControl;
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
      this.dataService.insert(this.dataService.buildServiceObject(0, this.createForm)).subscribe(i => {
        this.formSubmitted = false;
        this.dataService.navigateToIndex();
      });
    }
  }

  generateForm() {
    this.createForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', null),
      image: new FormControl('', [Validators.required]),
      linkUrl: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
      sortOrder: new FormControl('', [Validators.required]),
      textAlign: new FormControl('', [Validators.required]),
      textColor: new FormControl('', [Validators.required])
    });
  }
}

import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminHomePageSectionService } from '../../services/admin/home-page-section/service';
import { ValidationService } from '../../services/validation/validation.service';
import { AdminHomePageSection } from '../../services/admin/home-page-section/record';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home-page-section-edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class AdminHomePageSectionEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: AdminHomePageSectionService,
    private vs: ValidationService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(segment => {
      this.generateForm();
      this.id = parseInt(segment[1].path);
      dataService.getOne(this.id).subscribe(r => {
        this.record = r;
        dataService.image = r.image;
        this.generateForm();
      });
    });
  }

  editForm: FormGroup;
  formSubmitted: boolean = false;
  id: number = -1;
  record: AdminHomePageSection = new AdminHomePageSection();

  // Properties for getting the form and form fields.
  get form(): FormGroup {
    return this.editForm as FormGroup;
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
    if (this.image.value == null || this.image.value == '') this.image.setErrors(null);
    if (this.editForm.valid) {
      AppComponent.component.loadingIndicatorOn();
      this.dataService.update(this.id, this.dataService.buildServiceObject(this.id, this.editForm)).subscribe(i => {
        this.formSubmitted = false;
        this.dataService.navigateToIndex();
      });
    }
  }

  generateForm() {
    this.editForm = this.formBuilder.group({
      title: new FormControl(this.record.title, [Validators.required]),
      description: new FormControl(this.record.description, null),
      image: new FormControl('', [Validators.required]),
      linkUrl: new FormControl(this.record.linkUrl, [Validators.required]),
      isActive: new FormControl(this.record.isActive ? "true" : "false", [Validators.required]),
      sortOrder: new FormControl(this.record.sortOrder, [Validators.required]),
      textAlign: new FormControl(this.record.textAlign, [Validators.required]),
      textColor: new FormControl(this.record.textColor, [Validators.required])
    });
  }
}

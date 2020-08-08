import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor(
    
  ) { }

  formSubmitted: Boolean = false;

  fieldIsInvalid(control: FormControl): Boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  fieldHasErrors(formSubmitted: Boolean, control: FormControl): Boolean {
    return formSubmitted && control.errors && (control.dirty || control.touched);
  }

  fieldIsRequired(formSubmitted: Boolean, control: FormControl): Boolean {
    return formSubmitted && control.errors.required;
  }
}

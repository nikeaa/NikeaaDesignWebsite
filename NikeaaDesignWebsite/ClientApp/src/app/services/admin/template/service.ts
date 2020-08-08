import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminTemplate } from './record';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceBase } from '../../service-base.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTemplateService extends ServiceBase<AdminTemplate> {
  apiUrl: string = 'api/admin/template';
  navigationUrl: string = '/admin/admin/template';

  constructor(http: HttpClient, routerService: Router) {
    super(http, routerService);
  }

  buildServiceObject(form: FormGroup): AdminTemplate {
    const serviceObject: AdminTemplate = {
      id: 0,
      title: form.controls.title.value,
      isActive: form.controls.isActive.value == 'true' ? true : false,
      isDeleting: false
    };

    return serviceObject;
  }
}

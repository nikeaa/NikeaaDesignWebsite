import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminHomePageSection } from './record';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceBase } from '../../service-base.service';

@Injectable({
  providedIn: 'root'
})
export class AdminHomePageSectionService extends ServiceBase<AdminHomePageSection> {
  apiUrl: string = 'api/admin/home-page-section';
  navigationUrl: string = '/admin/home-page-section';

  constructor(http: HttpClient, routerService: Router) {
    super(http, routerService);
  }

  buildServiceObject(id: number, form: FormGroup): AdminHomePageSection {
    let c = form.controls;
    const serviceObject: AdminHomePageSection = {
      id: id,
      title: c.title.value,
      description: c.description.value,
      textAlign: c.textAlign.value,
      textColor: c.textColor.value,
      image: this.image,
      sortOrder: c.sortOrder.value,
      linkUrl: c.linkUrl.value,
      isActive: form.controls.isActive.value == 'true' ? true : false,
      isDeleting: false
    };

    return serviceObject;
  }
}

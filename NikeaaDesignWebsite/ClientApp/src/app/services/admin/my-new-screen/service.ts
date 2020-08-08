﻿﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyNewScreen } from './record';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceBase } from '../../service-base.service';

@Injectable({
  providedIn: 'root'
})
export class MyNewScreenService extends ServiceBase<MyNewScreen> {
  apiUrl: string = 'api/admin/my-new-screen';
  navigationUrl: string = '/admin/admin/my-new-screen';

  constructor(http: HttpClient, routerService: Router) {
    super(http, routerService);
  }

  buildServiceObject(form: FormGroup): MyNewScreen {
    const serviceObject: MyNewScreen = {
      id: 0,
      title: form.controls.title.value,
      isActive: form.controls.isActive.value == 'true' ? true : false,
      isDeleting: false
    };

    return serviceObject;
  }
}

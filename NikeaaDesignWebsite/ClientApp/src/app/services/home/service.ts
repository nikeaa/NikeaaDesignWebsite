import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminHomePageSection } from '../admin/home-page-section/record';
import { Router } from '@angular/router';
import { ServiceBase } from '../service-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ServiceBase<AdminHomePageSection> {
  apiUrl: string = 'api/home';
  navigationUrl: string = '/';

  constructor(http: HttpClient, routerService: Router) {
    super(http, routerService);
  }

  getActiveItems(): Observable<AdminHomePageSection[]> {
    return this.http.get<AdminHomePageSection[]>(this.apiUrl);
  }

}

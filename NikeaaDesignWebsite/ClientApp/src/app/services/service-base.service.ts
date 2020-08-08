import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceBase<T> {
  apiUrl: string = '';
  navigationUrl: string = '';
  image: string = '';

  constructor(
    public http: HttpClient,
    public routerService: Router
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getPage(pageNumber: number, pageSize: number): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}?page=${pageNumber}&size=${pageSize}`);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  insert(data): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}`, data);
  }

  update(id: number, data): Observable<HttpEvent<T>> {
    return this.http.put<HttpEvent<T>>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<HttpEvent<T>> {
    return this.http.delete<HttpEvent<T>>(`${this.apiUrl}/${id}`);
  }

  navigateToIndex() {
    this.routerService.navigateByUrl(this.navigationUrl);
  }

  navigateToCreate() {
    this.routerService.navigate([this.navigationUrl + '/create']);
  }

  navigateToEdit(id: number) {
    this.routerService.navigate([this.navigationUrl + '/edit/' + id]);
  }

  navigateToDelete(id: number) {
    this.routerService.navigate([this.navigationUrl + '/delete/' + id]);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const fileSelected: File = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (function () {
        //console.log("image loaded: " + btoa(e.target.result)); // the intellisense on this is wrong, the code works as expected.
        //this.image = btoa(e.target.result);
        console.log("image loaded: " + reader.result);
        this.image = reader.result;
      }).bind(this);
      reader.readAsDataURL(fileSelected);
    }
  }
}

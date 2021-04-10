import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebscrapeService {
  constructor(private http: HttpClient) {}

  getReport(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:3000/gets/financial-report');

  }
}

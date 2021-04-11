import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class WebscrapeService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getReport(): Observable<any> {
    this.messageService.add('Fetched financial report');
    return this.http.get<any>('http://localhost:3000/gets/financial-report');
  }

  sendTicker(ticker: any): Observable<any> {
    console.log('Ticker sent');
    return this.http.post<any>('http://localhost:3000/posts/chart-stats', {
      "ticker": ticker
    });
  }
}

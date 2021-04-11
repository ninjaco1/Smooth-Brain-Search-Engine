import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';
import { WebscrapeService } from '../webscrape.service';

@Component({
  selector: 'app-webscrap-component',
  templateUrl: './webscrap-component.component.html',
  styleUrls: ['./webscrap-component.component.css'],
})
export class WebscrapComponentComponent implements OnInit {
  message: string;
  priceAction: any;
  financialReport: any;
  ticker: string;

  constructor(private shared: SharedService, private http: HttpClient, private webscrapeService: WebscrapeService) {
    this.message = '';
    this.priceAction = [];
    this.financialReport = [];
    this.ticker = '';
  }

  getReport(): void {

    this.webscrapeService.getReport().subscribe((report) => console.log(report));

  }

  ngOnInit(): void {
    this.message = this.shared.getMessage();

    console.log("Getting Report");
    this.getReport();

    this.http
      .get<any>('http://localhost:3000/gets/price-action')
      .subscribe((data) => {
        // info from price action
        this.priceAction = data; // array of objects
        console.log(data);
      });

    // this.http
    //   .get<any>('http://localhost:3000/gets/financial-report')
    //   .subscribe((data) => {
    //     this.financialReport = JSON.parse(data[0]); // object for certain stock
    //     this.ticker = this.financialReport.Symbol;
    //     console.log(data[0]);
    //   });
  }
}

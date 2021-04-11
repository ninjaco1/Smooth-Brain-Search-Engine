import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';
import { WebscrapeService } from '../webscrape.service';
import { DatePipe } from '@angular/common';

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
  currentPrice: number;
  priceChange24: number;
  name: string;
  description: string;
  date: any;
  latest_date: any;
  volume: number;

  constructor(
    private shared: SharedService,
    private http: HttpClient,
    private webscrapeService: WebscrapeService,
    public datepipe: DatePipe
  ) {
    this.message = '';
    this.priceAction = [];
    this.financialReport = [];
    this.ticker = '';
    this.currentPrice = 0;
    this.priceChange24 = 0;
    this.name = '';
    this.description = '';
    this.volume = 0;
  }

  getReport(): void {
    this.webscrapeService.getReport().subscribe((report) => {
      this.financialReport = report[0];
      this.ticker = this.financialReport.Symbol;
      this.name = this.financialReport.Name;
      this.description = this.financialReport.Description;
    });
  }

  ngOnInit(): void {
    this.message = this.shared.getMessage();

    // console.log('Getting Report');
    this.getReport();

    this.date = new Date();
    this.latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    // console.log(this.latest_date);
    

    this.http
      .get<any>('http://localhost:3000/gets/price-action')
      .subscribe((data) => {
        // info from price action
        this.priceAction = data[0]; // array of objects

        if(this.priceAction[this.latest_date] == undefined)
        {

          console.log("No data for today's date");
          this.latest_date = this.priceAction[Object.keys(this.priceAction)[0]];

        }

      });

    // this.http
    //   .get<any>('http://localhost:3000/gets/financial-report')
    //   .subscribe((data) => {
    //     this.financialReport = data[0];
    //     this.ticker = this.financialReport.Symbol;
    //     this.name = this.financialReport.Name;
    //     this.description = this.financialReport.Description;

    //   });
  }
}

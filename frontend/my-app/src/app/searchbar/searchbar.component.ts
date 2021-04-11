import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { WebscrapeService } from '../webscrape.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor(
    private router: Router,
    private shared: SharedService,
    private http: HttpClient,
    private webscrapeService: WebscrapeService
  ) {}
  searchbar = ''; // ticker symbol

  res_text: any;

  ngOnInit(): void {}

  goToPage($myParam: string = ''): void {
    const navigationDetails: string[] = ['/WebScrap'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.shared.setMessage(this.searchbar);
    this.webscrapeService
      .sendTicker(this.searchbar.toUpperCase())
      .subscribe((res) => this.res_text = res);
    //this.http.post<any>("http://localhost:3000/posts/chart-stats",{ticker: this.searchbar.toUpperCase()});
    this.router.navigate(navigationDetails);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "../shared/shared.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService, private http: HttpClient) { }
  searchbar = ''; // ticker symbol 

  ngOnInit(): void { }
  
  goToPage($myParam: string = ''): void {
    const navigationDetails: string[] = ['/WebScrap'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.shared.setMessage(this.searchbar);
    this.router.navigate(navigationDetails);
    this.http.post("https://localhost:3000/posts/chart-stats",{ticker: this.searchbar});
  }

  
}

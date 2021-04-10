import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: string;
  private api = 'https://query1.finance.yahoo.com/v8/finance/chart/{0}?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&.tsrc=finance';

  constructor(private httpClient: HttpClient) {
    this.message = "";
  }

  setMessage(data: string){
    this.message = data;
  }

  getMessage(){
    return this.message;
  }

  public getStockInformation(message:string){
    let api = this.api.replace('{0}', message);
    return this.httpClient.get(api);
}
}

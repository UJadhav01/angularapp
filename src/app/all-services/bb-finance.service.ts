import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BbFinanceService {
  url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private _httpClient: HttpClient) {}

  getBBFinanceAPI():Observable<any> {
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '7add25279amsh0f0b8029ea1de27p1fa68bjsn044c22ac6e7a',
    });

    return this._httpClient.get(this.url, { headers: headers });
  }
}

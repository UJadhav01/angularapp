import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class YtMusicService {
  url= "https://youtube-music1.p.rapidapi.com/v2/search?query=eminem";
  constructor(private _httpClient: HttpClient) {}

  getYoutubeMusicAPI() {
    let headers = new HttpHeaders({
      "X-RapidAPI-Key": "7add25279amsh0f0b8029ea1de27p1fa68bjsn044c22ac6e7a",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    });
    return this._httpClient.get(this.url, { headers: headers });
  }
}

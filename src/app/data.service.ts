import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchUserBets() {
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json");
  }
}

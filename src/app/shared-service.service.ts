import { Injectable } from '@angular/core';
import { Location } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public comicDescription: any;
  public characterId: any;
  public API_URL = 'https://gateway.marvel.com/v1/public/'
  public KEY = '?ts=16185334990410&apikey=f819f3621f81dde7edc382743d93d41c&hash=968c51ae154e70c54a0d0dd4fb5f405d';

  constructor(public location: Location,
    private httpClient: HttpClient,) { }

  public setComicDescription(data) {
    this.comicDescription = data
  }
  public getComicDescription() {
    return this.comicDescription
  }
  public backToPage() {
    this.location.back();
  }
  public setCharacterId(id) {
    this.characterId = id
  }
  public getCharacterId() {
    return this.characterId
  }
  getApiCall(url): Observable<any> {
    return this.httpClient.get<any>(url)
  }

}

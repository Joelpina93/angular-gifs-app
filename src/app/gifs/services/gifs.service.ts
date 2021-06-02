import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Datum } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string = 'deXFXb8OxbXYYwjhFoEvfB8ywSMel3UP';
  private _records: string[] = [];

  public results: Datum[] = [];

  get records() {
    return [...this._records];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._records.includes(query)) {
      this._records.unshift(query);
      this._records = this._records.splice(0, 10);
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=deXFXb8OxbXYYwjhFoEvfB8ywSMel3UP&q=${ query }&limit=10`)
      .subscribe((resp) => {
        this.results = resp.data;
      });
  }
  constructor(private http: HttpClient) { }
}

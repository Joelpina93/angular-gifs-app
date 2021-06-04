import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Datum } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string = 'deXFXb8OxbXYYwjhFoEvfB8ywSMel3UP';
  private urlService: string = 'https://api.giphy.com/v1/gifs';
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
      localStorage.setItem('records', JSON.stringify(this._records));
    }
    const params = new HttpParams().set('api_key', this._apiKey).set('limit', '10').set('q', query);

    this.http.get<SearchGifsResponse>(`${this.urlService}/search`, {params : params})
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(resp.data));
      });
  }
  constructor(private http: HttpClient) { 
      this._records = JSON.parse(localStorage.getItem('records')!) || [];
      this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }
}

import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  ngOnInit(): void {
  }

  get results(){
    return this.gifsService.results;
  }

  constructor( private gifsService: GifsService) { }
}

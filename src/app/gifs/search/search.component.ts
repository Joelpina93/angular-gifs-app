import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }
  // Non-null assertion operator !: 
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search(){
    const valor = this.txtSearch.nativeElement.value;
    if(valor.length === 0){
      return;
    }
    this.gifsService.searchGifs(valor);
    console.log(this.gifsService.records);
    this.txtSearch.nativeElement.value = '';
  }
}

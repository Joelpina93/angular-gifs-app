import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor( private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get records(){
    return this.gifsService.records;
  }

  search( query: string){
    this.gifsService.searchGifs(query);
  }
}

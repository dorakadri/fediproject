import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tabFilms: Film[] = [];
  constructor(private filmsService : FilmsService) { }

  ngOnInit(): void {
    this.tabFilms=
 this.filmsService.getFilms();
  }


  deleteFilm(f: Film) {
    let i = this.tabFilms.indexOf(f);
    this.tabFilms.splice(i,1)
 //this.filmsService.deleteFilm(f.id);
  }

}

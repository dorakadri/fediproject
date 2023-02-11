import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  film: Film = {};
  id : string= "";
  constructor(public route: ActivatedRoute, public service: FilmsService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.film = this.service.getFilmParId(id) as Film;
  }
  updateFilm(film : any){
    this.service.updateFilm(this.id, film.value);
   console.log(film.value);
  }
}

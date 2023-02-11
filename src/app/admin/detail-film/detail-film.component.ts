import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  nomFilm : string ='';
  descFilm : string ='';
  constructor(private filmsService : FilmsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    const id = this.route.snapshot.params['id'];
    const film = this.filmsService.getFilmParId(id);

if (film) {
  this.nomFilm = film.nom;
  this.descFilm = film.description;
} else {
  this.nomFilm = 'Film non trouvé';
  this.descFilm = 'Description non disponible';
}

  }

}

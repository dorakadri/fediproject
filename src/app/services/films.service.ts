import { Injectable } from '@angular/core';
import { FILMS } from '../shared/models/des-films';
import { Film } from '../shared/models/film';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films : Film[]=FILMS;

  constructor() { }

  getFilms()
{
return this.films;
}

deleteFilm(film:any) {
  //this.films = this.films.filter(film => film.id !== id);
}

addFilm(nom: string, desc: string) {
  let id: string;
  if (this.films.length === 0) {
    id = '1';
  } else {
    id = crypto.randomUUID()
  }
  this.films.push({ id: id, nom: nom, description: desc });
}

getFilmParId(id: string): any{
  const film = this.films.find(
    (f) => {
      return f.id === id;
    }
  );
  return film;
}

updateFilm(id:string, film:Film){
const  film2 =  this.getFilmParId(id);
const index =this.films.findIndex(film=>film.id===id);
this.films[index]={...film2,...film}

}



}

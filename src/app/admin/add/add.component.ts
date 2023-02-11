import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private filmsService: FilmsService,private router: Router) { }

  ngOnInit(): void {
  }


  ajouterFilm(nom: string, desc: string){

    this.filmsService.addFilm(  nom, desc );
    alert("Le film a été ajouté avec succès!");
    this.router.navigate(['admin/list']);
  }
}

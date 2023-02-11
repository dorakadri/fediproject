import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  @Input() film: any;
  constructor() { }

  ngOnInit(): void {
  }

}

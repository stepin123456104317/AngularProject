import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any=[];
  moviedata:any=[];
  movieonid:any=[];
  constructor(private loginservice:LoginserviceService) { }
  desc:any;
  ngOnInit(): void {
    this.movies=this.loginservice.checkMovies();
   return this.movies;
  }

  onclickImage(id:any)
  {
  this.moviedata.forEach((element: any)=> {
    if(id===element.movieid)
    {
      this.movieonid.splice(0,this.movieonid.length)
  this.movieonid.push(element)
    }
});
  }
}

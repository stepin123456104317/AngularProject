import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
   username:any;
   pwd:any;
   userarray:any;
  //  moviearray:any;
   movies=[
    {"movieid":101, "moviename":"Roohi", "productionname":"Jio Studios","movieType":"Horror - Comedy", "director":"Hardik Mehta", "cast1":"Rajkumar Rao", "cast2":"Jahnvi Kapoor","language":"Hindi","poster":"/assests/images/roohi.jfif"},
    {"movieid":102, "moviename":"Mumbai Saga", "productionname":"T-Series","movieType":"Action", "director":"Sanjay Gupta", "cast1":"John Abraham", "cast2":"Kajal Aggarwal","language":"Hindi","poster":"src/assests/images/mumbaisaga.jfif"},
    {"movieid":201, "moviename":"Krack", "productionname":"Saraswathi film Divison","movieType":"Action", "director":"Gopichand", "cast1":"Ravi Teja", "cast2":"Shruti Haasan","language":"Telugu","poster":"src/assests/images/krack.jpeg"},
    {"movieid":202, "moviename":"Uppena", "productionname":"Mythiri Movie Makers","movieType":"Romance", "director":"Bucci Babu", "cast1":"Panja Vaishnav Tej", "cast2":"Kriti Shetty","language":"Telugu","poster":"src/assests/images/uppenna.jfif"}
   ];
  constructor() { }
  checkcred(){
      this.userarray=[
        {username:"manasa",pwd:"manu123"},
    ];
    return this.userarray;
      }
      checkMovies(){
           
           return this.movies
      }
  }


import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CartComponent } from '../cart/cart.component';
import { LoginserviceService } from '../loginservice.service';
import { MoviedetailsComponent } from '../moviedetails/moviedetails.component';
import { MoviesComponent } from '../movies/movies.component';
@Component({
  selector: 'app-movieentry',
  templateUrl: './movieentry.component.html',
  styleUrls: ['./movieentry.component.css']
})
export class MovieentryComponent implements OnInit {

  moviedata:any=[]
  movieonid:any=[]
  cartdata:any=[];
  
    dataId: any;
  constructor(private matDialog: MatDialog,private loginservice:LoginserviceService) { }
  selected:any=false
  ngOnInit(): void {
    this.moviedata=this.loginservice.checkMovies()
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
this.openDialog();
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=this.movieonid;
    let dialogRef = this.matDialog.open(MoviedetailsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`); 
    });
    
  }
  addMovie(_id:any)
  {
    
    this.moviedata.forEach((element:any) => {
      if(_id==element.movieid)
      {
        this.dataId=_id
        this.cartdata.push(element)
      }
      
    }); 
    Swal.fire('Movie Addded to Cart  Successfully')
    this.moviedata=this.loginservice.checkMovies()
    
  }
  openCartDialog(){
    if(this.cartdata.length==0)
    {
      Swal.fire('No items in the cart please add items to the cart')
    }
    else{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=this.cartdata;
    let dialogRef = this.matDialog.open(CartComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`); 
    });
  }
  }
  

}



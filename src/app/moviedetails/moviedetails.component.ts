import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MoviedetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
moviedata:any;
selected:any

  ngOnInit(): void {
    this.moviedata=this.data
  }
  close() {
    this.dialogRef.close("Thank you!");
  }
}
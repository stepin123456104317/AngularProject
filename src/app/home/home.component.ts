import { Component, OnInit ,ViewChild} from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import Swal from 'sweetalert2';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'project';
  @ViewChild("chart") "chart": ChartComponent;
  public chartOptions: any;

  movies:any=[];
  telugu=0;
  hindi=0;
  i:any;
  constructor(private Loginservice:LoginserviceService) { 
        this.movies=Loginservice.checkMovies();
        //  console.log(JSON.stringify(this.movies));
         this.movies.forEach((i: any)=> {
          if(i.language=="Telugu")
          this.telugu=this.telugu+1
          else
          this.hindi=this.hindi+1
          
          console.log(i)
         });
      }
      
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [this.telugu,this.hindi]
        }
      ],
      chart: {
        height: 300,
        type: "bar"
      },
      title: {
        text: "Movie Graph"
      },
      xaxis: {
        categories: ["Telugu Movies Count","Hindi Movies Count"]
      }
    };
  }
  }
  


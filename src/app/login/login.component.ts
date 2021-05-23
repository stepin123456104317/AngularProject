import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import{Router} from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formVar:any ;
  uname:any;
  pass:any;
  valid:any;
  valid2:any;
  sample:any;
   constructor( private fb: FormBuilder,private loginservice:LoginserviceService,private router:Router) {

    
  }
  
  myusername: string = "";
  ngOnInit() {
    this.formVar = this.fb.group({
      name: '',
      pwd: ''
    });
  }
  
onSubmit() {
   this.uname=this.formVar.value;
  this.pass=this.formVar.value;
  this.sample=this.pass;
  // console.log(this.sample);
  this.valid=this.loginservice.checkcred();
  console.log(this.valid)
  for(const i in this.valid){
    // console.log(this.valid[i].username);
    for(const j in this.sample){
    if(this.valid[i].username==this.sample.name && this.valid[i].pwd==this.sample.pwd){
      console.log("yes");
      this.router.navigate(['/home'])
    }
    else{
      Swal.fire('Invalid Username/Password')
    }
  }
  }
}
}
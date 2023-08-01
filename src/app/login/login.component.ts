import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string="";
  password:string="";
  apiRes:any;
  constructor(private router:Router, private http:HttpClient){}

  clickLogin(){
    let res=this.http.get("http://localhost:8080/checkUser?username="+this.username+"&password="+this.password)
    res.subscribe(
      data=>this.apiRes=data
    );
    console.log("Login clicked");
    console.log(this.username);
    console.log(this.password);
    console.log(this.apiRes);
    if(this.apiRes==true){
    this.router.navigate(["/home"]);
    
    }
  }
 
}

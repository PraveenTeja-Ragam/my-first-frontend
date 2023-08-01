import { Component } from '@angular/core';
import { Student } from '../Student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public mystudent:Student =new Student();
  stuResponse:any;
  constructor(private http:HttpClient){}

  stuSubmit(){
    console.log(this.mystudent);
    let res=this.http.post("http://localhost:1234/stu/reg",this.mystudent,
    {responseType: 'text' as 'json'});
  
  res.subscribe(
    (data:any)=>{
      this.stuResponse=data;

      this.mystudent = new Student();
    }
  );
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  users : any;
  constructor(private http:HttpClient){}

  ngOnInit(){
    let res=this.http.get("https://jsonplaceholder.typicode.com/albums");
  res.subscribe(
    resData=>{this.users=resData}
  )
  }
}

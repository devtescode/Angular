import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorService } from '../service/behavior.service';

@Component({
  selector: 'app-bahaviourchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bahaviourchild1.component.html',
  styleUrl: './bahaviourchild1.component.css'
})
export class Bahaviourchild1Component {
  constructor(public bahaviour : BehaviorService){}
  public bahavior_array:any=[
    {
      firstname: "john",
      lastname: "joy",
      age: "22",
      email: "joy@gmail.com"
    },
    {
      firstname: "ayo",
      lastname: "dele",
      age: "32",
      email: "dele@gmail.com"
    },
    {
      firstname: "captain",
      lastname: "college",
      age: "44",
      email: "captaine@gmail.com"
    },

  ]

  sendlist(list:any){
    this.bahaviour.behavior.next(list)
    console.log(this.bahaviour.behavior);
    
  }

 
}

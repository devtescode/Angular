import { Component } from '@angular/core';
import { BehaviorService } from '../service/behavior.service';

@Component({
  selector: 'app-behaviourchild2',
  standalone: true,
  imports: [],
  templateUrl: './behaviourchild2.component.html',
  styleUrl: './behaviourchild2.component.css'
})
export class Behaviourchild2Component {
  constructor(public bahavior: BehaviorService){}
  public  bahavior_obj:any={}
  ngOnInit(){
    // console.log(this.bahavior);
    this.bahavior.behavior.subscribe(data=>{
      console.log(data); 
      this.bahavior_obj = data
      console.log(this.bahavior_obj);
    })
  }
}

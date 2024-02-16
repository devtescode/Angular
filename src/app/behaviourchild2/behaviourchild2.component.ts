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
    this.bahavior.behavior.subscribe(data=>{
      this.bahavior_obj = data
    })
  }  
}

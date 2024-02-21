import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface Signupinterface {
  firstname: string,
  lastname: string,
  age: string,
  email: string,
}
@Component({
  selector: 'app-signupbehaviour',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signupbehaviour.component.html',
  styleUrl: './signupbehaviour.component.css'
})
export class SignupbehaviourComponent {
  constructor(public routes: Router){}
  public firstname = ''
  public lastname = ''
  public age = ''
  public email = ''
  public signupArray: Signupinterface[] = []

  ngOnInit() {
    const storedUsersignup = localStorage.getItem('signups')
    if (storedUsersignup) {
      this.signupArray = JSON.parse(storedUsersignup)
    }
  }

  SignupBtn() {
    if(this.firstname == "" || this.lastname == "" || this.age == "" || this.email == ""){
      alert("Enter Your Input")
    }
    else{
      let signupobj: Signupinterface = {
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        email: this.email,
      }
  
      console.log(signupobj);
      this.signupArray.push(signupobj)
      localStorage.setItem('signups', JSON.stringify(this.signupArray))
      console.log(this.signupArray);

      
      if(this.signupArray.push(signupobj)){
        this.routes.navigate(['behaviour'])
      }
    }

  }
}

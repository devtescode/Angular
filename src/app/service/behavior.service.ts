import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  constructor() { }
  public behavior = new BehaviorSubject<any>({
    firstname: "",
    lastname: "",
    age: "",
    email: ""
  })
}

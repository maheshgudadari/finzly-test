import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticatedUser: boolean;
  constructor() { }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  set isAuthenticated(status: boolean){
    this.isAuthenticatedUser = status;
    this.loggedIn.next(status);
  }

  get isAuthenticated(){
    return this.isAuthenticatedUser;
  }
}

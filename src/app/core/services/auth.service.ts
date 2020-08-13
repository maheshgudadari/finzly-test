import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticatedUser: boolean;
  constructor() { }

  set isAuthenticated(status: boolean){
    this.isAuthenticatedUser = status;
  }

  get isAuthenticated(){
    return this.isAuthenticatedUser;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getAccountInfo(){
    return this.http.get('../../assets/account.json').subscribe(response =>  { });
  }

    getprofileInfo(){
      this.http.get('../../assets/profile.json').subscribe(response =>  {
        console.log(response);
      });
    }

      getTransaction(){
        this.http.get('../../assets/transaction.json').subscribe(response =>  {
          console.log(response);
        });
      }

}

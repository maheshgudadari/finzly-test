import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccoutResolverService  {

  constructor(private apiService: ApiService) { }
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
  //   return this.apiService.getAccountInfo();
  // }
}

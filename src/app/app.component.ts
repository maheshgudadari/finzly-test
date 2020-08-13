import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Finzly';
  isLoggedIn$: Observable<boolean>;
  constructor( public router: Router, private authService: AuthService) {
    console.log(router.url);
  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}

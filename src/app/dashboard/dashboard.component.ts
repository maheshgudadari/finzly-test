import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  accountInfo: any;
  transaction: any;
  constructor(private activatedRoute: ActivatedRoute, private route: ActivatedRoute) { }
users: any[];
ngOnInit() {
  console.log(this.route.snapshot.data);
  this.activatedRoute.data.subscribe((data) => {
    this.accountInfo = data;
    console.log(data);
  });




  // ngOnInit(): void {
  //   this.apiservice.getAccountInfo().subscribe(response =>  {
  //     this.accountInfo = response;
  //  });
  //   console.log(this.accountInfo);
  //   this.transaction = this.apiservice.getTransaction();
   // this.accountInfo = this.apiservice.getAccountInfo();
  }

}

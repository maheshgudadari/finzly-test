import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ApiService } from '../core/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [ ApiService]
})
export class DashboardModule { }

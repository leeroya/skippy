import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import {ActivityReportsComponent} from './features/reporting/activity-reports/activity-reports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'app-dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'app-activity-reports', component: ActivityReportsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

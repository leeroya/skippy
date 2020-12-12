import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import {ActivityReportsComponent} from './features/reporting/activity-reports/activity-reports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-activity-reports', component: ActivityReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

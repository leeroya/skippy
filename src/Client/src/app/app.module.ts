import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarModule } from './shared/top-bar/top-bar.module';
import { UserAccountModule } from './shared/user-account/user-account.module';
import { SideNavModule } from './shared/side-nav/side-nav.module';
import { ActivityReportsModule } from './features/reporting/activity-reports/activity-reports.module';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        TopBarModule,
        UserAccountModule,
        ActivityReportsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SideNavModule,
      AuthModule.forRoot({
        domain: environment.authDomain,
        clientId: environment.authClientId,
        scope: environment.authScope
      }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

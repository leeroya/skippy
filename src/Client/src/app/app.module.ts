import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarModule } from './shared/top-bar/top-bar.module';
import { UserAccountModule } from './shared/user-account/user-account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SideNavModule} from './shared/side-nav/side-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        TopBarModule,
        UserAccountModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SideNavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

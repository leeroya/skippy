import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarModule } from './shared/top-bar/top-bar.module';
import { UserAccountModule } from './shared/user-account/user-account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TopBarModule,
    UserAccountModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

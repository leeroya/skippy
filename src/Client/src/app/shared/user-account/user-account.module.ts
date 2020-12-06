import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account.component';



@NgModule({
  declarations: [UserAccountComponent],
  exports: [UserAccountComponent],
  imports: [
    CommonModule
  ]
})
export class UserAccountModule { }

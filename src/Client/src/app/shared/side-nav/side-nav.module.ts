import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav.component';

import {MaterialManagerModule} from '../../shared/material-manager/material-manager.module'
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [SideNavComponent],
  exports: [
    SideNavComponent
  ],
  imports: [
    MaterialManagerModule,
    CommonModule,
    AppRoutingModule
  ]
})
export class SideNavModule { }

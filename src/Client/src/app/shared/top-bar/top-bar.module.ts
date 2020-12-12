import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { MaterialManagerModule } from '../../shared/material-manager/material-manager.module'



@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [
    MaterialManagerModule,
    CommonModule
  ]
})
export class TopBarModule { }

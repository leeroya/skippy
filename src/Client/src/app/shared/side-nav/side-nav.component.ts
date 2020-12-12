import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer, MatSidenav} from '@angular/material/sidenav';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  // @ts-ignore
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.openStateChanged.subscribe(( o: any) => {
      if (o) {
        this.sidenav.open();
      }else {
        this.sidenav.close();
      }
    });
  }

}

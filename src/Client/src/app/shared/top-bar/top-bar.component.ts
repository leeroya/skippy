import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menuState = false;
  constructor(private menuService: MenuService) { }
  ngOnInit(): void {
    this.menuService.openStateChanged.subscribe((o: boolean) => {
      this.menuState = o;
    });
  }

  toggle(): void {
    if (this.menuState) {
      this.menuService.updateOpenState(false);
    } else {
      this.menuService.updateOpenState(true);
    }
  }
}

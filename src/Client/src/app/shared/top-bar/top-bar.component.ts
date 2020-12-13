import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';

import { AuthService } from '@auth0/auth0-angular';
import {NotificationModel} from '../models/notificationModel';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menuState = false;
  public name!: string;
  public picture!: string;
  public overAllProgress: number;
  public notifications: NotificationModel[];

  constructor(private menuService: MenuService, public auth: AuthService) {
    this.overAllProgress = 10;
    this.notifications = [new NotificationModel('title', 'message')];
  }
  ngOnInit(): void {
    this.menuService.openStateChanged.subscribe((o: boolean) => {
      this.menuState = o;
    });
    this.auth.user$.subscribe((u: any) => {
       this.name = u.name;
       this.picture = u.picture;
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

import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private open = new BehaviorSubject(false);
  openStateChanged = this.open.asObservable();

  updateOpenState(o: boolean): void {
    this.open.next(o);
  }
}

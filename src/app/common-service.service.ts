import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  private notifyRefreshSb = new Subject<any>();
  notifyRefreshObservable$ = this.notifyRefreshSb.asObservable();

  public notifyRefresh(data: any) {
    if (data) {
      this.notifyRefreshSb.next(data);
    }
  }
}

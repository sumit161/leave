import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLogInStatus: Subject<boolean> = new Subject<boolean>();
  logoutStatus: Subject<boolean> = new Subject<boolean>();
  constructor() {}
}

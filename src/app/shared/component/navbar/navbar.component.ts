import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logoutSubj: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _AuthService: AuthService,
    private _LoaderService: LoaderService
  ) {}
  accessFor: string = localStorage.getItem('Userrole')!;
  ngOnInit(): void {}
  Onlogout() {
    this._AuthService.LogOutFromApp();
    this._LoaderService.logoutStatus.next(true);
  }
}

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable, delay, finalize } from 'rxjs';
import { StaffleaveService } from './staffleave.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private _LoaderService: LoaderService,private _staffleavestatus :StaffleaveService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._LoaderService.isLogInStatus.next(true);
    // this._staffleavestatus.staffarr.next(get)
    const headers = req.clone({
      setHeaders :{
        authorization : "httpService",
      }
    });
    return next.handle(headers).pipe(delay(10),finalize(()=>{
      this._LoaderService.isLogInStatus.next(false);
    }))
  }
}

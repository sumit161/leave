import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StaffleaveService {
  LeaveUrl: string = `${environment.baseUrl}LeaveAppl`;
  // staffarr: Subject<any[]> = new Subject<any[]>();

  constructor(private _http: HttpClient) {}
  GetAllLeaveAppl(): Observable<any[]> {
    return this._http.get<any[]>(this.LeaveUrl);
  }
  CreateObj(obj: any): Observable<any> {
    console.log(obj);
    return this._http.post<any>(this.LeaveUrl, obj);
  }
  PatchObj(Obj: any): Observable<any> {
    let updateurl  = `${this.LeaveUrl}/${Obj.id}`
    return this._http.patch<any>(updateurl, Obj);
  }
}

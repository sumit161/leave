import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl: string = `${environment.baseUrl}users`;
  constructor(private _http: HttpClient) {}
  GetAllUsers(): Observable<any[]> {
    return this._http.get<any[]>(this.usersUrl);
  }
  CreateObj(obj:any):Observable<any>{
    console.log(obj);

    return this._http.post<any>(this.usersUrl,obj)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }


  register(): Observable<any>{

  }

}

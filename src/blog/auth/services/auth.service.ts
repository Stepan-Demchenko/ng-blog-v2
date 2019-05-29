import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Auth} from '../models/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = '/api/auth/register';
  private currentUserSubject: BehaviorSubject<Auth>;
  public currentUser: Observable<Auth>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(data: {}) {
    return this.http.post<Auth>(this.url, data).pipe(map(token => {
      if (token) {
        console.log(token);
        localStorage.setItem('token', JSON.stringify(token));
        this.currentUserSubject.next(token);
      }
      return token;
    }));
  }

  login(data: {}) {
    return this.http.post<Auth>('/api/auth/login', data).pipe(map(token => {
      if (token) {
        console.log(token);
        localStorage.setItem('token', JSON.stringify(token));
        this.currentUserSubject.next(token);
      }
      return token;
    }));
  }

  public get currentUserValue(): Auth {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}


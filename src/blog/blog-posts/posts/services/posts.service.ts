import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Posts} from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = '/api/posts';


  constructor(
    protected http: HttpClient
  ) {
  }

  public getList(): Observable<Posts> {
    return this.http.get<Posts>(this.url);
  }

  public getPost(id: string): Observable<Posts> {
    return this.http.get<Posts>(`${this.url}/${id}`);
  }

  public update(id: string, data): Observable<any> {
    return this.http.put<Posts>(`${this.url}/${id}`, data);
  }

  public create(data: Posts): Observable<any> {
    return this.http.post(this.url, data);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

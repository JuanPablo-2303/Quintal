import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { PostComponent } from '../pages/post/post.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getAbout() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
    .pipe(
      tap(about => {
        console.log(about);
      })
    );
  }

  getContact() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .pipe(
      tap(contact => {
        console.log(contact);
      })
    );
  }
}

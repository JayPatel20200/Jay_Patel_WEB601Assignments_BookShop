import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  getContentObs():Observable<Content[]>{
    return of(CONTENT);
  }
  getContentById(id:number):Observable<any>{
    return of(CONTENT.find(item => item.id === id));
  }
}

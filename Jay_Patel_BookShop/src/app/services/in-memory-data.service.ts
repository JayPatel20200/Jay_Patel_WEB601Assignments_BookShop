import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = CONTENT;
    return {content};
    }
}

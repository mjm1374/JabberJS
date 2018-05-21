import { Injectable } from '@angular/core';
import {Story} from './story';
//import { STORIES } from './mock-stories';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class StoryService {
private storiesUrl = 'api/stories';


getStories(): Observable<Story[]> {
console.log("Service executed");
  return this.http.get<Story[]>(this.storiesUrl)
}
 
  constructor(private http: HttpClient) {  }

}
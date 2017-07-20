import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
 
@Injectable()
export class MessageService {
 
  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  getMessages(path : string) {
    return this.http.get(path).map((res:Response) => res.json());
  }

}
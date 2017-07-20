import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
 
@Injectable()
export class DoodleService {
 
  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  getDoodles() {
    return this.http.get('assets/doodles.json').map((res:Response) => res.json());
  }

}
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {BehaviorSubject,of} from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {

private _getUrl="http://localhost:3000";
  constructor( private _http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // getVideo(urlPrefix: string, query: any): Observable<any> {
  //   const url =  urlPrefix
  //   return this._http.get(url, {params:{"query":JSON.stringify(query)}}).pipe(
  //     catchError(error)
  //   )
  // }

  getVideo(urlPrefix: string, query:any): Observable<any> {
    const url = this._getUrl + urlPrefix
    return this._http.get(url, {params:{"query":JSON.stringify(query)}}).pipe(map((data: any) => data.result ),
    catchError(error => { return throwError('Its a Trap!')})
);
    }
    addvideo(urlPrefix: string, query: any): Observable<any> {
      const url = this._getUrl + urlPrefix;
      return this._http.post(url,  JSON.stringify(query)).pipe(map((data: any) => data.result ),
      catchError(error => { return throwError('Its a Trap!')})
);
    }
  // getVideo(): Observable<any>{
  //   return this._http.get('http://localhost:3000/api/videos');
  // }

  // handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = error.error.msg;
  //   }
  //   return throwError(errorMessage);
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

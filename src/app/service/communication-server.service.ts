import { ServerResponse } from './../interface/server-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Message } from '../interface/message';

@Injectable({ providedIn: 'root' })
export class CommunicationServerService {
  private readonly apiUrl = 'https://pombocorreio-api.herokuapp.com'

  constructor(private http: HttpClient) { }

  messages$ = <Observable<ServerResponse>>
  this.http.get<ServerResponse>(`${this.apiUrl}/messages/messagesList`)
  .pipe(tap(console.log), catchError(this.handleError))

  save$ = (message: Message) => <Observable<ServerResponse>>
  this.http.post<ServerResponse>(`${this.apiUrl}/messages/saveMessage`, message)
  .pipe(tap(console.log), catchError(this.handleError))

  delete$ = (id: number) => <Observable<ServerResponse>>
  this.http.delete<ServerResponse>(`${this.apiUrl}/messages/deleteMessage/${id}`)
  .pipe(tap(console.log), catchError(this.handleError))

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Error: ${error.status} - ${error.message}`);
  }
}



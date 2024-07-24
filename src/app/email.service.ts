import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = '/.netlify/functions/sendEmail';

  constructor(private http: HttpClient) {}

  sendEmail(recipientEmail: string, subject: string, text: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify({ recipientEmail, subject, text });

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    data = { email: 'admin@example.com', password: 'Test@123' };
    return this.http.post( environment.APIEndpoint + '/api/login', data);
  }
}

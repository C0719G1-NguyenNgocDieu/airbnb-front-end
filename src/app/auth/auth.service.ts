import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtResponse} from '../JwResponse';
import {IRegister} from '../i-register';
import {IProfile} from '../i-profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class SignUpInfo {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080';
  private loginUrl = 'http://localhost:8080/api/auth/signin';

  constructor(private http: HttpClient) {
  }
  attemptAuth(credentials: IRegister): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
  update(user: IProfile): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.API_URL}/profile/edit/${user.token}`, user);
  }
}

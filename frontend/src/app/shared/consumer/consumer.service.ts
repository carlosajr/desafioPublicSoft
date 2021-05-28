import { environment } from './../../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiUrl;
const TOKEN_PREFIX = 'Bearer ';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  get(rota: string, autenticada: boolean = true): Observable<any> {
    if (autenticada) {
      const headers = this.generateHeaders();
      return this.httpClient
        .get(API + rota, { headers });
    }

    return this.httpClient
      .get(API + rota);
  }

  post(rota: string, data: Object, autenticada: boolean = true): Observable<any> {
    if (autenticada) {
      const headers = this.generateHeaders();
      return this.httpClient
        .post(API + rota, data, { headers });
    }

    return this.httpClient
      .post(API + rota, data);
  }

  private generateHeaders(): HttpHeaders {
    const token = TOKEN_PREFIX + this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('Authorization', token);
    return headers;
  }
}

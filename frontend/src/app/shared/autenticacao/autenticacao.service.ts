import { UsuarioService } from './usuario/usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  API = 'http://api.publicsoft.cvmakers.com.br:3333';

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(this.API + '/sessions', {
        email,
        senha
      },
        {
          observe: 'response'
        }).pipe(
          tap(res => {
            const authToken = res.body.token ?? '';
            this.usuarioService.salvaToken(authToken);
          })
        )
  }
}

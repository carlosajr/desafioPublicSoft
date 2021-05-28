import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from './cadastro-usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  API = 'http://api.publicsoft.cvmakers.com.br:3333';

  constructor(private httpClient: HttpClient) { }

  cadastrar(createUsuario: CadastroUsuario): Observable<any> {
    console.log(createUsuario);
    return this.httpClient
      .post(this.API + '/usuarios', createUsuario);
  };
}

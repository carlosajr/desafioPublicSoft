import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class EstadoService {
  constructor(private http: HttpClient) { }

  listEstados() {
    return this.http
      .get<Object[]>('api.publicsoft.cvmakers.com.br:3333/estados');
  }
}

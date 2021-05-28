import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ConsumerService } from './../../shared/consumer/consumer.service';
import { CadastroUsuario } from './cadastro-usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private consumer: ConsumerService) { }

  cadastrar(createUsuario: CadastroUsuario): Observable<any> {
    return this.consumer.post('/usuarios', createUsuario, false);
  };
}

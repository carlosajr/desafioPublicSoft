import { Injectable } from '@angular/core';
import { ConsumerService } from './../../shared/consumer/consumer.service';
import { Observable } from 'rxjs';
import { Prestador } from '../prestadores/prestador';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  constructor(private consumer: ConsumerService) { }

  cadastrar(
    prestador_id: string,
    servico_prestado: string,
    data_inicio: string,
    data_fim: string
  ): Observable<any> {
    return this.consumer.post('/contratos', {
      prestador_id,
      servico_prestado,
      data_inicio,
      data_fim
    })
  }

  listar() {
    return this.consumer.get('/contratos/')
  }

  atualizar(
    contrato_id: string,
    prestador_id: string,
    servico_prestado: string,
    data_inicio: string,
    data_fim: string
  ): Observable<any> {
    return this.consumer.put('/contratos/' + contrato_id, {
      prestador_id,
      servico_prestado,
      data_inicio,
      data_fim,
    })
  }

  deletar(contrato_id: string): Observable<any> {
    return this.consumer.delete('/contratos/' + contrato_id)
  }

  getContrato(contrato_id: string): Observable<any> {
    return this.consumer.get('/contratos/' + contrato_id)
  }

  getDiasContrato(contrato_id: string): Observable<any> {
    return this.consumer
      .get('/contratos/' + contrato_id + '/prazo/restante/')
  }

  getPrestadores(): Observable<Prestador[]> {
    return this.consumer.get('/prestadores')
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumerService } from './../../shared/consumer/consumer.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadoresService {

  constructor(private consumer: ConsumerService) { }

  cadastrar(
    tipo_pessoa: string,
    cpf_cnpj: string,
    nome: string,
    email: string,
    cep: string,
    endereco: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
  ): Observable<any> {
    return this.consumer.post('/prestadores', {
      tipo_pessoa,
      cpf_cnpj,
      nome,
      email,
      cep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    })
  }

  listar(): Observable<any> {
    return this.consumer.get('/prestadores/')
  }

  atualizar(
    prestador_id: string,
    nome: string,
    email: string,
    cep: string,
    endereco: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
  ): Observable<any> {
    return this.consumer.put('/prestadores/' + prestador_id, {
      nome,
      email,
      cep,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    })
  }

  deletar(prestador_id: string): Observable<any> {
    return this.consumer.delete('/prestadores/' + prestador_id)
  }

  getPrestador(prestador_id: string): Observable<any> {
    return this.consumer.get('/prestadores/' + prestador_id)
  }

  getEstados(): Observable<any> {
    return this.consumer.get('/estados')
  }

  getCidades(estado: string): Observable<any> {
    return this.consumer.get('/estados/' + estado + '/cidades')
  }

  getCep(cep: string): Observable<any> {
    return this.consumer.get('/cep/' + cep)
  }


}

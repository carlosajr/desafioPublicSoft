export interface Contrato {
  id: string,
  prestador_id?: string,
  servico_prestado: string,
  data_inicio: Date,
  data_fim: Date,
  prestador?: {
    id: string,
    tipo_pessoa: string,
    cpf_cnpj: string,
    nome: string,
    email: string,
    cep: string,
    endereco: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
  }
}

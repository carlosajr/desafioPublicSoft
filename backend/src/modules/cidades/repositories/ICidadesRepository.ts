import ICreateCidadeDTO from "@modules/cidades/dtos/ICreateCidadeDTO";
import Cidade from "@modules/cidades/infra/typeorm/entities/Cidade";

export default interface ICidadeRepository {
  create(data: ICreateCidadeDTO): Promise<Cidade>;
  findByCodigo(codigo: number): Promise<Cidade | undefined>;
}

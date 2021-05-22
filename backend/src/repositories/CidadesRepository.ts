import { EntityRepository, Repository } from "typeorm";

import Cidade from "../models/Cidade";

@EntityRepository(Cidade)
class CidadesRepository extends Repository<Cidade> {
  public async findByCodigo(codigo: number): Promise<Cidade | null> {
    const findCidade = await this.findOne({
      where: { codigo },
    });
    return findCidade || null;
  }
}

export default CidadesRepository;

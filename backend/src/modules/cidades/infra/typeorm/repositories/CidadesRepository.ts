import ICreateCidadeDTO from "@modules/cidades/dtos/ICreateCidadeDTO";
import Cidade from "@modules/cidades/infra/typeorm/entities/Cidade";
import ICidadeRepository from "@modules/cidades/repositories/ICidadesRepository";
import { getRepository, Repository } from "typeorm";

class CidadesRepository implements ICidadeRepository {
  private ormRepository: Repository<Cidade>;

  constructor() {
    this.ormRepository = getRepository(Cidade);
  }

  public async findByCodigo(codigo: number): Promise<Cidade | undefined> {
    const findCidade = await this.ormRepository.findOne({
      where: { codigo },
    });
    return findCidade || undefined;
  }

  public async create({ codigo, nome }: ICreateCidadeDTO): Promise<Cidade> {
    const cidade = this.ormRepository.create({ codigo, nome });

    await this.ormRepository.save(cidade);

    return cidade;
  }
}

export default CidadesRepository;

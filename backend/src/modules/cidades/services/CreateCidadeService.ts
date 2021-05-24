import Cidade from "@modules/cidades/infra/typeorm/entities/Cidade";
import ICidadeRepository from "@modules/cidades/repositories/ICidadesRepository";
import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppErrors";

interface IRequestDTO {
  codigo: number;
  nome: string;
}

@injectable()
class CreateCidadeService {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadeRepository
  ) {
    //
  }

  public async execute({ codigo, nome }: IRequestDTO): Promise<Cidade> {
    const cidadeJaRegistrada = await this.cidadesRepository.findByCodigo(
      codigo
    );

    if (cidadeJaRegistrada) {
      throw new AppError("Cidade já registrada");
    }

    const cidade = await this.cidadesRepository.create({
      codigo,
      nome,
    });

    return cidade;
  }
}

export default CreateCidadeService;

import { getCustomRepository } from "typeorm";

import AppError from "../errors/AppErrors";
import Cidade from "../models/Cidade";
import CidadesRepository from "../repositories/CidadesRepository";

interface IRequestDTO {
  codigo: number;
  nome: string;
}

class CreateCidadeService {
  public async execute({ codigo, nome }: IRequestDTO): Promise<Cidade> {
    const cidadesRepository = getCustomRepository(CidadesRepository);
    const cidadeJaRegistrada = await cidadesRepository.findByCodigo(codigo);

    if (cidadeJaRegistrada) {
      throw new AppError("Cidade já registrada");
    }

    const cidade = cidadesRepository.create({
      codigo,
      nome,
    });

    await cidadesRepository.save(cidade);

    return cidade;
  }
}

export default CreateCidadeService;

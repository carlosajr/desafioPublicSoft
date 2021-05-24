import Cidade from "@modules/cidades/infra/typeorm/entities/Cidade";
import ICidadeRepository from "@modules/cidades/repositories/ICidadesRepository";
import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppErrors";

interface IRequestDTO {
  codigo_estado: number;
}

@injectable()
class ListCidadesPorEstadoService {
  constructor(
    @inject("CidadesRepository")
    private cidadesRepository: ICidadeRepository
  ) {
    //
  }

  public async execute({ codigo_estado }: IRequestDTO): Promise<Cidade[]> {
    console.log(codigo_estado);
    const estados = await this.cidadesRepository.findByCodigoEstado(
      codigo_estado
    );
    return estados;
  }
}

export default ListCidadesPorEstadoService;

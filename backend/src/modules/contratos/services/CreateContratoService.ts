import ICreateContratoDTO from "@modules/contratos/dtos/ICreateContratoDTO";
import Contrato from "@modules/contratos/infra/typeorm/entities/Contrato";
import IContratosRepository from "@modules/contratos/repositories/IContratosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateContratoService {
  constructor(
    @inject("ContratosRepository")
    private contratosRepository: IContratosRepository
  ) {
    //
  }

  public async execute(dataContrato: ICreateContratoDTO): Promise<Contrato> {
    const contrato = await this.contratosRepository.create(dataContrato);

    return contrato;
  }
}

export default CreateContratoService;

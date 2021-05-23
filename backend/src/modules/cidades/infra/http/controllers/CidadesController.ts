import CreateCidadeService from "@modules/cidades/services/CreateCidadeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class CidadesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { codigo, nome } = request.body;

    const createCidade = container.resolve(CreateCidadeService);

    const cidade = await createCidade.execute({
      codigo,
      nome,
    });

    return response.status(201).json(cidade);
  }
}

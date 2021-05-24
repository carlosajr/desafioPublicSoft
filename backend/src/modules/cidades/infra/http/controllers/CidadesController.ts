import CreateCidadeService from "@modules/cidades/services/CreateCidadeService";
import ListCidadesService from "@modules/cidades/services/ListCidadesService";
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

  public async index(request: Request, response: Response): Promise<Response> {
    const listCidadesService = container.resolve(ListCidadesService);

    const cidades = await listCidadesService.execute();

    return response.status(200).json(cidades);
  }
}

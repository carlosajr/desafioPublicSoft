import ListCidadesPorEstadoService from "@modules/estados/services/ListCidadesPorEstadoService";
import ListEstadosService from "@modules/estados/services/ListEstadosService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class EstadosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listEstadosService = container.resolve(ListEstadosService);

    const estados = await listEstadosService.execute();

    return response.status(200).json(estados);
  }

  public async showCidadesPorEstado(
    request: Request,
    response: Response
  ): Promise<Response> {
    const listCidadesPorEstadoService = container.resolve(
      ListCidadesPorEstadoService
    );
    const codigo_estado = parseInt(request.params.codigo_estado);

    const cidades = await listCidadesPorEstadoService.execute({
      codigo_estado,
    });

    return response.status(200).json(cidades);
  }
}

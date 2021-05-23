import { Router } from "express";
import { getCustomRepository } from "typeorm";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CidadesRepository from "../repositories/CidadesRepository";
import CreateCidadeService from "../services/CreateCidadeService";

const cidadesRoutes = Router();

cidadesRoutes.use(ensureAuthenticated);

cidadesRoutes.get("/", async (request, response) => {
  const cidadesRepository = getCustomRepository(CidadesRepository);
  const cidades = await cidadesRepository.find();
  return response.json(cidades);
});

cidadesRoutes.post("/", async (request, response) => {
  try {
    const { codigo, nome } = request.body;

    const createCidade = new CreateCidadeService();

    const cidade = await createCidade.execute({
      codigo,
      nome,
    });

    return response.status(201).json(cidade);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default cidadesRoutes;

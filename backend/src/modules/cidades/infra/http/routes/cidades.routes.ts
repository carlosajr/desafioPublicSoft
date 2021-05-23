import CreateCidadeService from "@modules/cidades/services/CreateCidadeService";
import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";
import { container } from "tsyringe";

const cidadesRoutes = Router();

cidadesRoutes.use(ensureAuthenticated);

// cidadesRoutes.get("/", async (request, response) => {
//   const cidades = await cidadesRepository.find();
//   return response.json(cidades);
// });

cidadesRoutes.post("/", async (request, response) => {
  const { codigo, nome } = request.body;

  const createCidade = container.resolve(CreateCidadeService);

  const cidade = await createCidade.execute({
    codigo,
    nome,
  });

  return response.status(201).json(cidade);
});

export default cidadesRoutes;

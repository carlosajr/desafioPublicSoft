import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

import CidadesController from "../controllers/CidadesController";

const cidadesRoutes = Router();
const cidadeController = new CidadesController();

cidadesRoutes.use(ensureAuthenticated);

// cidadesRoutes.get("/", async (request, response) => {
//   const cidades = await cidadesRepository.find();
//   return response.json(cidades);
// });

cidadesRoutes.post("/", cidadeController.create);

export default cidadesRoutes;

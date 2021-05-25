import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

import CepController from "@shared/infra/http/controllers/CepController";

const cepRoutes = Router();
const cepController = new CepController();

cepRoutes.use(ensureAuthenticated);

cepRoutes.get("/:cep", cepController.show);

export default cepRoutes;

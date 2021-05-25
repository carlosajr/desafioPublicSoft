import ContratosController from "@modules/contratos/infra/http/controllers/ContratosController";
import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

const contratosRoutes = Router();
const contratosController = new ContratosController();

contratosRoutes.use(ensureAuthenticated);

contratosRoutes.post("/", contratosController.create);
contratosRoutes.get("/", contratosController.index);
contratosRoutes.get("/:contrato_id", contratosController.show);
contratosRoutes.put("/:contrato_id", contratosController.update);
contratosRoutes.delete("/:contrato_id", contratosController.delete);

export default contratosRoutes;

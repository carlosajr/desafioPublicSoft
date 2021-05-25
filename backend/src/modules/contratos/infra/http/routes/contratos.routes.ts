import ContratosController from "@modules/contratos/infra/http/controllers/ContratosController";
import ContratosFilterController from "@modules/contratos/infra/http/controllers/ContratosFilterController";
import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

const contratosRoutes = Router();
const contratosController = new ContratosController();
const contratosFilterController = new ContratosFilterController();

contratosRoutes.use(ensureAuthenticated);

contratosRoutes.post("/", contratosController.create);
contratosRoutes.get("/", contratosController.index);
contratosRoutes.get("/:contrato_id", contratosController.show);
contratosRoutes.put("/:contrato_id", contratosController.update);
contratosRoutes.delete("/:contrato_id", contratosController.delete);

contratosRoutes.get("/prazo/:prazo", contratosFilterController.list);
contratosRoutes.get("/prazo/count/:prazo", contratosFilterController.count);
contratosRoutes.get(
  "/:contrato_id/prazo/restante/",
  contratosFilterController.show
);

export default contratosRoutes;

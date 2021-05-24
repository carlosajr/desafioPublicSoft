import PrestadoresController from "@modules/prestadores/infra/http/controllers/PrestadoresController";
import ensureAuthenticated from "@modules/usuarios/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

const prestadoresRoutes = Router();
const prestadoresController = new PrestadoresController();

prestadoresRoutes.use(ensureAuthenticated);

prestadoresRoutes.post("/", prestadoresController.create);
prestadoresRoutes.get("/", prestadoresController.index);
prestadoresRoutes.get("/:prestador_id", prestadoresController.show);
prestadoresRoutes.put("/:prestador_id", prestadoresController.update);
prestadoresRoutes.delete("/:prestador_id", prestadoresController.delete);

export default prestadoresRoutes;

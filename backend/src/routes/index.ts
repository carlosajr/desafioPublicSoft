import { Router } from "express";

import cidadesRoutes from "./cidades.routes";
import infoRoutes from "./info.routes";
import usuariosRoutes from "./usuarios.routes";

const routes = Router();

routes.use("/", infoRoutes);
routes.use("/cidades", cidadesRoutes);
routes.use("/usuarios", usuariosRoutes);

export default routes;

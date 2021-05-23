import { Router } from "express";

import cidadesRoutes from "./cidades.routes";
import infoRoutes from "./info.routes";
import sessionsRoutes from "./sessions.routes";
import usuariosRoutes from "./usuarios.routes";

const routes = Router();

routes.use("/", infoRoutes);
routes.use("/cidades", cidadesRoutes);
routes.use("/usuarios", usuariosRoutes);
routes.use("/sessions", sessionsRoutes);

export default routes;

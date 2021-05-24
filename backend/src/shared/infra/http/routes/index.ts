import cidadesRoutes from "@modules/cidades/infra/http/routes/cidades.routes";
import estadosRoutes from "@modules/estados/infra/http/routes/estados.routes";
import sessionsRoutes from "@modules/usuarios/infra/http/routes/sessions.routes";
import usuariosRoutes from "@modules/usuarios/infra/http/routes/usuarios.routes";
import { Router } from "express";

import infoRoutes from "./info.routes";

const routes = Router();

routes.use("/", infoRoutes);
routes.use("/cidades", cidadesRoutes);
routes.use("/estados", estadosRoutes);
routes.use("/usuarios", usuariosRoutes);
routes.use("/sessions", sessionsRoutes);

export default routes;

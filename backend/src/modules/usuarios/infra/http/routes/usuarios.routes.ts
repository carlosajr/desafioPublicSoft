import { Router } from "express";

import UsuarioController from "../controllers/UsuariosController";

const usuariosRoutes = Router();
const usuarioController = new UsuarioController();

usuariosRoutes.post("/", usuarioController.create);

export default usuariosRoutes;

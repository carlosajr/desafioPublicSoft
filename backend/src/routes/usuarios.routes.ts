import { Router } from "express";

import CreateUsuarioService from "../services/CreateUsuarioService";

const usuariosRoutes = Router();

usuariosRoutes.post("/", async (request, response) => {
  const { nome, email, senha } = request.body;

  const createUsuario = new CreateUsuarioService();

  const usuario = await createUsuario.execute({
    nome,
    email,
    senha,
  });

  delete usuario.senha;

  return response.status(201).json(usuario);
});

export default usuariosRoutes;

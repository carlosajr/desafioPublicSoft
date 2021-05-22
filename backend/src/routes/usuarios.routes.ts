import { Router } from "express";

import CreateUsuarioService from "../services/CreateUsuarioService";

const usuariosRoutes = Router();

usuariosRoutes.post("/", async (request, response) => {
  try {
    const { nome, email, senha } = request.body;

    const createUsuario = new CreateUsuarioService();

    const usuario = await createUsuario.execute({
      nome,
      email,
      senha,
    });

    delete usuario.senha;

    return response.status(201).json(usuario);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usuariosRoutes;

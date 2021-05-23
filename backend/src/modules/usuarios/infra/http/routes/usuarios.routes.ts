import CreateUsuarioService from "@modules/usuarios/services/CreateUsuarioService";
import { Router } from "express";
import { container } from "tsyringe";

const usuariosRoutes = Router();

usuariosRoutes.post("/", async (request, response) => {
  const { nome, email, senha } = request.body;

  const createUsuario = container.resolve(CreateUsuarioService);

  const usuario = await createUsuario.execute({
    nome,
    email,
    senha,
  });

  delete usuario.senha;

  return response.status(201).json(usuario);
});

export default usuariosRoutes;

import UsuariosRepository from "@modules/usuarios/infra/typeorm/repositories/UsuarioRepository";
import AuthenticateUsuarioService from "@modules/usuarios/services/AuthenticateUsuarioService";
import { Router } from "express";

const sessionsRoutes = Router();

sessionsRoutes.post("/", async (request, response) => {
  const { email, senha } = request.body;

  const usuariosRepository = new UsuariosRepository();
  const authenticateUsuario = new AuthenticateUsuarioService(
    usuariosRepository
  );

  const { usuario, token } = await authenticateUsuario.execute({
    email,
    senha,
  });

  delete usuario.senha;

  return response.json({ usuario, token });
});

export default sessionsRoutes;

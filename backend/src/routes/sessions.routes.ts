import { Router } from "express";

import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRoutes = Router();

sessionsRoutes.post("/", async (request, response) => {
  const { email, senha } = request.body;

  const authenticateUsuario = new AuthenticateUserService();

  const { usuario, token } = await authenticateUsuario.execute({
    email,
    senha,
  });

  delete usuario.senha;

  return response.json({ usuario, token });
});

export default sessionsRoutes;

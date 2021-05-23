import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";

import authConfig from "../config/auth";
import Usuario from "../models/Usuario";

interface IRequestDTO {
  email: string;
  senha: string;
}

interface IResponseDTO {
  usuario: Usuario;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, senha }: IRequestDTO): Promise<IResponseDTO> {
    const usuariosRepository = getRepository(Usuario);

    const usuario = await usuariosRepository.findOne({
      where: { email },
    });

    if (!usuario) {
      throw new Error("Email ou senha invalidos");
    }

    const senhaCorreta = await compare(senha, usuario.senha);

    if (!senhaCorreta) {
      throw new Error("Email ou senha invalidos");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: usuario.id,
      expiresIn,
    });

    return {
      usuario,
      token,
    };
  }
}

export default AuthenticateUserService;

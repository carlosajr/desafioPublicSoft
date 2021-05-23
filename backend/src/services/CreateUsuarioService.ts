import { hash } from "bcryptjs";
import { getRepository } from "typeorm";

import AppError from "../errors/AppErrors";
import Usuario from "../models/Usuario";

interface IRequestDTO {
  nome: string;
  email: string;
  senha: string;
}

class CreateCidadeService {
  public async execute({ nome, email, senha }: IRequestDTO): Promise<Usuario> {
    const usuariosRepository = getRepository(Usuario);

    const usuarioJaExiste = await usuariosRepository.findOne({
      where: { email },
    });

    if (usuarioJaExiste) {
      throw new AppError("Endereço de email já utilizado");
    }

    const hashedSenha = await hash(senha, 6);

    const usuario = usuariosRepository.create({
      nome,
      email,
      senha: hashedSenha,
    });

    await usuariosRepository.save(usuario);

    return usuario;
  }
}

export default CreateCidadeService;

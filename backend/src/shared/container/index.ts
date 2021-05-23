import CidadesRepository from "@modules/cidades/infra/typeorm/repositories/CidadesRepository";
import ICidadeRepository from "@modules/cidades/repositories/ICidadesRepository";
import UsuariosRepository from "@modules/usuarios/infra/typeorm/repositories/UsuarioRepository";
import IUsuarioRepository from "@modules/usuarios/repositories/IUsuarioRepository";
import { container } from "tsyringe";

container.registerSingleton<ICidadeRepository>(
  "CidadesRepository",
  CidadesRepository
);

container.registerSingleton<IUsuarioRepository>(
  "UsuariosRepository",
  UsuariosRepository
);

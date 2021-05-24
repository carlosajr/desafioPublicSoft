import CidadesRepository from "@modules/cidades/infra/typeorm/repositories/CidadesRepository";
import ICidadeRepository from "@modules/cidades/repositories/ICidadesRepository";
import EstadosRepository from "@modules/estados/infra/typeorm/repositories/EstadosRepository";
import IEstadoRepository from "@modules/estados/repositories/IEstadosRepository";
import UsuariosRepository from "@modules/usuarios/infra/typeorm/repositories/UsuarioRepository";
import IUsuarioRepository from "@modules/usuarios/repositories/IUsuarioRepository";
import { container } from "tsyringe";

import "@modules/usuarios/providers/container";

container.registerSingleton<ICidadeRepository>(
  "CidadesRepository",
  CidadesRepository
);

container.registerSingleton<IEstadoRepository>(
  "EstadosRepository",
  EstadosRepository
);

container.registerSingleton<IUsuarioRepository>(
  "UsuariosRepository",
  UsuariosRepository
);

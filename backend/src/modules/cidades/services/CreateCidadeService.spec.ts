import Cidade from "@modules/cidades/infra/typeorm/entities/Cidade";
import FakeCidadesRepository from "@modules/cidades/repositories/fakes/FakeCidadesRepository";
import CreateCidadeService from "@modules/cidades/services/CreateCidadeService";

import AppError from "@shared/errors/AppErrors";

describe("CreateCidade", () => {
  it("deve permitir criar uma nova cidade", async () => {
    const fakeCidadeRepository = new FakeCidadesRepository();
    const createCidade = new CreateCidadeService(fakeCidadeRepository);

    const cidade = await createCidade.execute({
      codigo: 123123,
      nome: "Campina Grande",
    });

    expect(cidade).toBeInstanceOf(Cidade);
    expect(cidade).toHaveProperty("id");
    expect(cidade.codigo).toBe(123123);
  });

  it("não deve permitir criar uma nova cidade com um codigo já existente", async () => {
    const fakeCidadeRepository = new FakeCidadesRepository();
    const createCidade = new CreateCidadeService(fakeCidadeRepository);

    await createCidade.execute({
      codigo: 123123,
      nome: "Campina Grande",
    });

    expect(
      createCidade.execute({
        codigo: 123123,
        nome: "Nova Campina Grande",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});

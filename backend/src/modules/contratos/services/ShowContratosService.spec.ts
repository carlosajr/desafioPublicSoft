import Contrato from "@modules/contratos/infra/typeorm/entities/Contrato";
import FakeContratosRepository from "@modules/contratos/repositories/fakes/FakeContratosRepository";
import CreateContratoService from "@modules/contratos/services/CreateContratoService";
import ShowContratosService from "@modules/contratos/services/ShowContratosService";

import AppError from "@shared/errors/AppErrors";

describe("ShowPrestador", () => {
  it("deve permitir exibir o prestador", async () => {
    const fakePrestadorRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakePrestadorRepository);
    const showContratosService = new ShowContratosService(
      fakePrestadorRepository
    );

    const contrato = await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    const contratoShow = await showContratosService.execute(contrato.id);

    expect(contratoShow).toBeInstanceOf(Contrato);
    expect(contratoShow).toHaveProperty("id");
  });

  it("não deve permitir exibir o contrato com id errado", async () => {
    const fakePrestadorRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakePrestadorRepository);
    const showContratosService = new ShowContratosService(
      fakePrestadorRepository
    );

    await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    const idErrado = "443878cc-4309-47c4-825e-496ed3816931";

    expect(showContratosService.execute(idErrado)).rejects.toBeInstanceOf(
      AppError
    );
  });
});

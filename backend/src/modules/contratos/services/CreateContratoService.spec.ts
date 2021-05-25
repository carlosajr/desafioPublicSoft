import Contrato from "@modules/contratos/infra/typeorm/entities/Contrato";
import FakeContratosRepository from "@modules/contratos/repositories/fakes/FakeContratosRepository";
import CreateContratoService from "@modules/contratos/services/CreateContratoService";

import AppError from "@shared/errors/AppErrors";

describe("CreateContrato", () => {
  it("deve permitir criar um novo contrato", async () => {
    const fakePrestadorRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakePrestadorRepository);

    const contrato = await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    expect(contrato).toBeInstanceOf(Contrato);
    expect(contrato).toHaveProperty("id");
    expect(contrato.prestador_id).toBe("87e22580-ea66-497b-a84e-2e08b0bee247");
  });
});

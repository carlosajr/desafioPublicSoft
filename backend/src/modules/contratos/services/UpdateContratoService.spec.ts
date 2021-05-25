import Contrato from "@modules/contratos/infra/typeorm/entities/Contrato";
import FakeContratosRepository from "@modules/contratos/repositories/fakes/FakeContratosRepository";
import CreateContratoService from "@modules/contratos/services/CreateContratoService";
import UpdateContratoService from "@modules/contratos/services/UpdateContratoService";

import AppError from "@shared/errors/AppErrors";

describe("UpdatePrestador", () => {
  it("deve permitir atualizar um contrato", async () => {
    const fakeContratoRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakeContratoRepository);
    const updateContrato = new UpdateContratoService(fakeContratoRepository);

    const contrato = await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    const contratoParaAtualziar = {
      contrato_id: contrato.id,
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema em Node",
      data_inicio: new Date(),
      data_fim: new Date(),
    };

    const contratoAtualizado = await updateContrato.execute(
      contratoParaAtualziar
    );

    expect(contratoAtualizado).toBeInstanceOf(Contrato);
    expect(contratoAtualizado.servico_prestado).toBe(
      "Desenvolvimento de Sistema em Node"
    );
  });

  it("não deve permitir atualizar um contrato com id errado", async () => {
    const fakeContratoRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakeContratoRepository);
    const updateContrato = new UpdateContratoService(fakeContratoRepository);

    await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    const contratoParaAtualziar = {
      contrato_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema em Node",
      data_inicio: new Date(),
      data_fim: new Date(),
    };

    expect(
      updateContrato.execute(contratoParaAtualziar)
    ).rejects.toBeInstanceOf(AppError);
  });
});

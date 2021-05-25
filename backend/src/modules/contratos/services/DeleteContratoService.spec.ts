import FakeContratosRepository from "@modules/contratos/repositories/fakes/FakeContratosRepository";
import CreateContratoService from "@modules/contratos/services/CreateContratoService";
import DeleteContratoService from "@modules/contratos/services/DeleteContratoService";

import AppError from "@shared/errors/AppErrors";

describe("DeleteContrato", () => {
  it("deve permitir deletar um contrato", async () => {
    const fakeContratoRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakeContratoRepository);
    const deleteContrato = new DeleteContratoService(fakeContratoRepository);

    const contrato = await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    const contratoDeletado = await deleteContrato.execute(contrato.id);

    expect(contratoDeletado.ativo).toBe(false);
  });

  it("não deve permitir deletar um prestador com id incorreto", async () => {
    const fakeContratoRepository = new FakeContratosRepository();
    const createContrato = new CreateContratoService(fakeContratoRepository);
    const deleteContrato = new DeleteContratoService(fakeContratoRepository);

    await createContrato.execute({
      prestador_id: "87e22580-ea66-497b-a84e-2e08b0bee247",
      servico_prestado: "Desenvolvimento de Sistema",
      data_inicio: new Date(),
      data_fim: new Date(),
    });

    const idErrado = "448b3e42-d03f-42c2-9ec4-b68e7023a50E";

    expect(deleteContrato.execute(idErrado)).rejects.toBeInstanceOf(AppError);
  });
});

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreatePrestador1621885160280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "prestadores",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "tipo_pessoa",
            type: "varchar",
          },
          {
            name: "cpf_cnpj",
            type: "varchar",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "numero",
            type: "integer",
          },
          {
            name: "complemento",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "bairro",
            type: "varchar",
          },
          {
            name: "cidade_id",
            type: "uuid",
          },
          {
            name: "estado_id",
            type: "uuid",
          },
          {
            name: "ativo",
            type: "boolean",
            default: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "prestadores",
      new TableForeignKey({
        name: "PrestadorCidade",
        columnNames: ["cidade_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "cidades",
      })
    );

    await queryRunner.createForeignKey(
      "prestadores",
      new TableForeignKey({
        name: "PrestadorEstado",
        columnNames: ["estado_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "estados",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("prestadores", "PrestadorEstado");
    await queryRunner.dropForeignKey("prestadores", "PrestadorCidade");

    await queryRunner.dropTable("prestadores");
  }
}

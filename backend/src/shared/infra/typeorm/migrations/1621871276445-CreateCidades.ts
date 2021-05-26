import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateCidades1621871276445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cidades",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "codigo",
            type: "integer",
          },
          {
            name: "codigo_estado",
            type: "integer",
          },
          {
            name: "nome",
            type: "varchar",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "cidades",
      new TableForeignKey({
        name: "EstadoCidade",
        columnNames: ["codigo_estado"],
        referencedColumnNames: ["codigo"],
        referencedTableName: "estados",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("cidades", "EstadoCidade");

    await queryRunner.dropTable("cidades");
  }
}

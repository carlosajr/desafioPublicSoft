import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("cidades")
class Cidade {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  codigo_estado: number;

  @Column()
  codigo: number;

  @Column()
  nome: string;

  @Column()
  sigla_estado: string;
}

export default Cidade;

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("cidades")
class Cidade {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  codigo: number;

  @Column()
  nome: string;
}

export default Cidade;

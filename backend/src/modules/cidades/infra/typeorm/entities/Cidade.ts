import Estado from "@modules/estados/infra/typeorm/entities/Estado";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("cidades")
class Cidade {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  codigo_estado: number;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: "codigo_estado" })
  estado: Estado;

  @Column()
  codigo: number;

  @Column()
  nome: string;
}

export default Cidade;

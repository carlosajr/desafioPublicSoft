import Cidade from "@modules/cidades/infra/typeorm/entities/Cidade";
import Estado from "@modules/estados/infra/typeorm/entities/Estado";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("prestadores")
class Prestador {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  tipo_pessoa: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade_id: string;

  @ManyToOne(() => Cidade)
  @JoinColumn({ name: "cidade_id" })
  cidade: Cidade;

  @Column()
  estado_id: string;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: "estado_id" })
  estado: Estado;

  @Column()
  ativo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Prestador;

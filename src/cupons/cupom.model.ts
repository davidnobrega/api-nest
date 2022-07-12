import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export type CuponsDocument = CuponsModel & Document;

@Entity()
@Schema()
export class CuponsModel {
  @PrimaryColumn()
  @Prop()
  codigo: string;

  @Prop()
  @Column()
  aplicar_no_total: boolean;

  @Prop()
  @Column()
  ativo: boolean;

  @Prop()
  @Column()
  condicao_cliente: string;

  @Prop()
  @Column()
  condicao_produto: string;

  @Prop()
  @Column()
  cumulativo: boolean;

  @Prop()
  @Column()
  descricao: string;

  @Prop()
  @Column()
  id_externo: string;

  @Prop()
  @Column()
  quantidade: number;

  @Prop()
  @Column()
  quantidade_por_cliente: number;

  @Prop()
  @Column()
  quantidade_usada: number;

  @Prop()
  @Column()
  tipo: string;

  @Prop()
  @Column()
  validade: Date;

  @Prop()
  @Column()
  valor: number;

  @Prop()
  @Column()
  valor_minimo: number;
}

export const CuponsSchema = SchemaFactory.createForClass(CuponsModel);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export type CuponsDocument = CuponsModel & Document;

@Entity('coupons')
@Schema()
export class CuponsModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
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
  @IsNotEmpty()
  descricao: string;

  @Prop()
  @Column({ nullable: true })
  id_externo: string;

  @Prop()
  @Column()
  quantidade: number;

  @Prop()
  @Column({ nullable: true })
  quantidade_por_cliente: number;

  @Prop()
  @Column({ nullable: true })
  quantidade_usada: number;

  @Prop()
  @Column()
  tipo: string;

  @Prop()
  @Column({ nullable: true })
  validade: Date;

  @Prop()
  @Column()
  valor: number;

  @Prop()
  @Column({ nullable: true })
  valor_minimo: number;
}

export const CuponsSchema = SchemaFactory.createForClass(CuponsModel);

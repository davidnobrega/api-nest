import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
@Schema()
export class ProductModel {
  @Prop()
  @PrimaryColumn()
  sku: string;

  @Prop()
  @Column()
  nome: string;

  @Prop()
  @Column()
  descricao_completa: string;

  @Prop()
  @Column({ default: true })
  ativo: boolean;

  @Prop()
  @Column({ default: true })
  destaque: boolean;

  @Prop()
  @Column()
  peso: number;

  @Prop()
  @Column()
  altura: number;

  @Prop()
  @Column()
  largura: number;

  @Prop()
  @Column()
  profundidade: number;

  @Prop()
  @Column()
  tipo: string;

  @Prop()
  @Column({ default: true })
  usado: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);

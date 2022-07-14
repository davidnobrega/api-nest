import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

import { Document } from 'mongoose';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

export type ProductDocument = ProductModel & Document;

@Entity('coupons')
@Schema()
export class ProductModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsString({ message: "o campo 'código' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'código' precisa ser preenchido" })
  codigo: string;

  @IsBoolean({ message: "o campo 'aplicar_no_total' precisa ser um booleano" })
  @IsNotEmpty({ message: "o campo 'aplicar_no_total' precisa ser preenchido" })
  aplicar_no_total: boolean;

  @IsBoolean({ message: " o campo 'ativo' precisa ser um booleano" })
  @IsNotEmpty({ message: " o campo 'ativo' precisa ser um booleano" })
  ativo: boolean;

  @IsString({ message: "o campo 'condicao_cliente' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'condicao_cliente' precisa ser preenchido" })
  condicao_cliente: string;

  @IsString({ message: "o campo 'condicao_produto' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'condicao_produto' precisa ser preenchido" })
  condicao_produto: string;

  @IsBoolean({ message: " o campo 'cumulativo' precisa ser um booleano" })
  @IsNotEmpty({ message: " o campo 'cumulativo' precisa ser preenchido" })
  cumulativo: boolean;

  @IsString({ message: "o campo 'descricao' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'descricao' precisa ser preenchido" })
  descricao: string;

  @IsString({ message: "o campo 'id_externo' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'id_externo' precisa ser preenchido" })
  id_externo: string;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' quantidade' precisa ser number" },
  )
  @IsNotEmpty({ message: "o campo 'quantidade' precisa ser preenchido" })
  quantidade: number;

  @IsNumber(
    { allowNaN: false },
    {
      message: "o campo ' quantquantidade_por_clienteidade' precisa ser number",
    },
  )
  @IsNotEmpty({
    message: "o campo 'quantidade_por_cliente' precisa ser preenchido",
  })
  quantidade_por_cliente: number;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' quantidade_usada' precisa ser number" },
  )
  @IsNotEmpty({
    message: "o campo 'quantidade_usada' precisa ser preenchido",
  })
  quantidade_usada: number;

  @IsString({ message: "o campo 'tipo' precisa ser uma string" })
  @IsNotEmpty({
    message: "o campo 'tipo' precisa ser preenchido",
  })
  tipo: string;

  @Type(() => Date)
  @Transform((x) => new Date())
  @IsDate({ message: " o campo 'validade' precisar ser um date" })
  @IsNotEmpty({ message: "o campo 'validade' não pode estar vazio" })
  validade: Date;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' valor' precisa ser number" },
  )
  @IsNotEmpty({
    message: "o campo 'valor' precisa ser preenchido",
  })
  valor: number;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' valor_minimo' precisa ser number" },
  )
  @IsNotEmpty({
    message: "o campo 'valor_minimo' precisa ser preenchido",
  })
  valor_minimo: number;
}

export const ProductsSchema = SchemaFactory.createForClass(ProductModel);

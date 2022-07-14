import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';


export class CuponsDto {
  @IsString({ message: "o campo 'código' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'código' precisa ser preenchido" })
  codigo: string;

  @IsBoolean({ message: "O campo 'aplicar_no_total' precisa ser booleano" })
  @IsNotEmpty()
  aplicar_no_total: boolean;

  @IsBoolean({ message: "O campo 'aplicar_no_total' precisa ser booleano" })
  @IsNotEmpty()
  ativo: boolean;

  @IsString({ message: "o campo 'código' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'condicao_cliente' não pode estar vazio" })
  condicao_cliente: string;

  @IsString({ message: "o campo 'código' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'condicao_produto' não pode estar vazio" })
  condicao_produto: string;

  @IsBoolean()
  @IsNotEmpty({ message: "o campo 'cumulativo' não pode estar vazio" })
  cumulativo: boolean;

  @IsString({ message: "o campo 'código' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'descricao' não pode estar vazio" })
  descricao: string;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' quantidade' precisa ser number" },
  )
  @IsNotEmpty({ message: "o campo 'quantidade' não pode estar vazio" })
  quantidade: number;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' quantidade_por_cliente' precisa ser number" },
  )
  @IsNotEmpty({
    message: "O campo 'quantidade_por_cliente' não pode ser vazio",
  })
  quantidade_por_cliente: number;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' quantidade_usada' precisa ser number" },
  )
  @IsNotEmpty({ message: "o campo 'quantidade_usada' não pode estar vazio" })
  quantidade_usada: number;

  @IsString({ message: "o campo 'código' precisa ser uma string" })
  @IsNotEmpty({ message: "o campo 'tipo' não pode estar vazio" })
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
  @IsNotEmpty({ message: "o campo 'valor' não pode estar vazio" })
  valor: number;

  @IsNumber(
    { allowNaN: false },
    { message: "o campo ' valor_minimo' precisa ser number" },
  )
  @IsNotEmpty({ message: "o campo 'valor_minimo' não pode estar vazio" })
  valor_minimo: number;
}

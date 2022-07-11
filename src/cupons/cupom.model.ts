export class CuponsModel {
  aplicar_no_total: boolean;
  ativo: boolean;
  codigo: string;
  condicao_cliente: string;
  condicao_produto: string;
  cumulativo: boolean;
  descricao: string;
  id_externo: null;
  quantidade: number;
  quantidade_por_cliente: number;
  quantidade_usada: number;
  tipo: string;
  validade: Date;
  valor: number;
  valor_minimo: number;
}

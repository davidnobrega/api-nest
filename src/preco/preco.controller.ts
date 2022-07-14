import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { PrecoService } from './preco.service';
import { PrecoModel } from '../models/preco.model';

@Controller('preco')
export class PrecoController {
  constructor(private precoService: PrecoService) {}

  @Get()
  getAll() {
    return this.precoService.getAll();
  }

  @Get(':id')
  obterUm(@Param() params) {
    return this.precoService.getPreco(params.id);
  }

  @Put(':id')
  editar(@Body() body: PrecoModel, @Param() idPreco) {
    return this.precoService.putPreco(body, idPreco.id);
  }
}
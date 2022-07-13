import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CuponsModel } from './cupom.model';
import { CuponsService } from './cupons.service';

@Controller('cupons')
export class CuponsController {
  constructor(private cuponsService: CuponsService) {}

  @Get()
  getAll() {
    return this.cuponsService.getAll();
  }

  @Get(':id')
  obterUm(@Param() params) {
    return this.cuponsService.getCupons(params.id);
  }

  @Post()
  criar(@Body() body: CuponsModel) {
    return this.cuponsService.postCupons(body);
  }

  @Put(':id')
  editar(@Body() body: CuponsModel, @Param() idCupons) {
    return this.cuponsService.putCupons(body, idCupons.id);
  }
}

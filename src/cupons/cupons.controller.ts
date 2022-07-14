import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CuponsDto } from '../dto/cupom.dto';
import { CuponsModel } from '../models/cupom.model';
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
  criar(@Body() body: CuponsDto) {
    return this.cuponsService.postCupons(body);
  }

  @Put(':id')
  editar(@Body() body: CuponsModel, @Param() idCupons) {
    return this.cuponsService.putCupons(body, idCupons.id);
  }
}

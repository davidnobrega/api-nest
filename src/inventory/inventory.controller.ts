import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryModel } from '../models/inventory.model';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get()
  getAll() {
    return this.inventoryService.getAll();
  }

  @Get(':id')
  obterUm(@Param() params) {
    return this.inventoryService.getInventory(params.id);
  }

  @Put(':id')
  editar(@Body() body: InventoryModel, @Param() idProduct) {
    return this.inventoryService.putInventory(body, idProduct.id);
  }
}

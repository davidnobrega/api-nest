import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductModel } from './produtos.model';

@Controller('produtos')
export class ProdutosController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  obterUm(@Param() params) {
    return this.productService.getProduct(params.id);
  }

  @Post()
  criar(@Body() params) {
    return this.productService.postProduct(params);
  }

  @Put(':id')
  editar(@Body() body: ProductModel, @Param() idProduct) {
    return this.productService.putProduct(body, idProduct.id);
  }
}

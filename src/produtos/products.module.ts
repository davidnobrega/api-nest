import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { HttpModule } from '@nestjs/axios';
import { ProductsService } from './products.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ProdutosController],
  providers: [ProductsService],
})
export class ProductsModule {}

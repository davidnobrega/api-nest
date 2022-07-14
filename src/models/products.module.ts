import { Module } from '@nestjs/common';
import { ProdutosController } from '../produtos/produtos.controller';
import { HttpModule } from '@nestjs/axios';
import { ProductsService } from '../produtos/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from '../produtos/produtos.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductModel]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),

    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://DavidNobrega:Da23bi20@thorli.gu9s7.mongodb.net/',
      }),
    }),
    MongooseModule.forFeature([
      { name: ProductModel.name, schema: ProductSchema },
    ]),
  ],

  controllers: [ProdutosController],
  providers: [ProductsService],
})
export class ProductsModule {}

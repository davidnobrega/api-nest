import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { HttpModule } from '@nestjs/axios';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './produtos.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
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
    TypeOrmModule.forFeature([ProductModel]),
  ],

  controllers: [ProdutosController],
  providers: [ProductsService],
})
export class ProductsModule {}

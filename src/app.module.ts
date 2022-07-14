import { Module } from '@nestjs/common';
import { ProductsModule } from './models/products.module';
import { InventoryModule } from './inventory/inventory.module';
import { PrecoModule } from './preco/preco.module';
import { CuponsModule } from './cupons/cupons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuponsModel } from './models/cupom.model';
import { ProductModel } from './produtos/produtos.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'allblack',
      entities: [CuponsModel, ProductModel],
      synchronize: true,
    }),
    ProductsModule,
    InventoryModule,
    PrecoModule,
    CuponsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}

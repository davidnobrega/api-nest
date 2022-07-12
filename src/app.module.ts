import { Module } from '@nestjs/common';
import { ProductsModule } from './produtos/products.module';
import { InventoryModule } from './inventory/inventory.module';
import { PrecoModule } from './preco/preco.module';
import { CuponsModule } from './cupons/cupons.module';

@Module({
  imports: [ProductsModule, InventoryModule, PrecoModule, CuponsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}

import { Module } from '@nestjs/common';
import { ProductsModule } from './produtos/products.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [ProductsModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProductsModule } from './produtos/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

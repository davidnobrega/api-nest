import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { PrecoController } from './preco.controller';
import { PrecoService } from './preco.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PrecoController,],
  providers: [PrecoService],
})
export class PrecoModule {}
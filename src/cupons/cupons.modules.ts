import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CuponsController } from './cupons.controller';
import { CuponsService } from './cupons.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CuponsController],
  providers: [CuponsService],
})
export class CuponsModule {}

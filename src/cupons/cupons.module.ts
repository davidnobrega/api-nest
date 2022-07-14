import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CuponsController } from './cupons.controller';
import { CuponsService } from './cupons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuponsModel, CuponsSchema } from '../models/cupom.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([CuponsModel]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MongooseModule.forFeature([
      { name: CuponsModel.name, schema: CuponsSchema },
    ]),
  ],
  controllers: [CuponsController],
  providers: [CuponsService],
})
export class CuponsModule {}

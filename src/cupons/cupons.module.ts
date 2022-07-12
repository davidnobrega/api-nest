import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CuponsController } from './cupons.controller';
import { CuponsService } from './cupons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CuponsModel, CuponsSchema } from './cupom.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'allblack',
      entities: [CuponsModel],
      synchronize: true,
    }),

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

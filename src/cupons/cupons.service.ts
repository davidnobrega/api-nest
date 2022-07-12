import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { firstValueFrom } from 'rxjs';
import { CuponsModel, CuponsDocument } from './cupom.model';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const BASE_URL = 'https://api.awsli.com.br';

@Injectable()
export class CuponsService {
  constructor(
    @InjectRepository(CuponsModel)
    private cuponsRepository: Repository<CuponsModel>,
    @InjectModel(CuponsModel.name) private model: Model<CuponsDocument>,
    private readonly httpService: HttpService,
  ) {}

  async getAll(): Promise<CuponsModel> {
    const { data } = await this.httpService.axiosRef.get(
      `${BASE_URL}/v1/cupom/`,
      {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      },
    );

    const { objects } = data;

    return objects;
  }

  async getCupons(idCupons: number): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${BASE_URL}/v1/cupom/${idCupons}`, {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      }),
    );
    return data;
  }

  async postCupons(body: any): Promise<CuponsModel> {
    try {
      const { _id } = await this.model.create({
        ...body,
      });

      // TODO Verificar por que o HASH do mongo não é aceito
      const lojaIntegradaBody = {
        //  id_externo: _id.toHexString(),
        ...body,
      };

      console.log(lojaIntegradaBody);

      // const { data } = await firstValueFrom(
      //   this.httpService.post(`${BASE_URL}/v1/cupom/`, lojaIntegradaBody, {
      //     headers: {
      //       Authorization:
      //         'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
      //     },
      //   }),
      // );

      const createCupomSQL = this.cuponsRepository.save(body);
      return createCupomSQL;
    } catch (err) {
      console.log(err);
    }
  }

  async putCupons(body: any, idCupons: number): Promise<CuponsModel> {
    const { data } = await firstValueFrom(
      this.httpService.put(`${BASE_URL}/v1/cupom/${idCupons}`, body, {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      }),
    );
    return data;
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CuponsModel } from './cupom.model';

const BASE_URL = 'https://api.awsli.com.br';

@Injectable()
export class CuponsService {
  constructor(private readonly httpService: HttpService) {}

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
      const { data } = await firstValueFrom(
        this.httpService.post(`${BASE_URL}/v1/cupom/`, body, {
          headers: {
            Authorization:
              'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
          },
        }),
      );
      return data;
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

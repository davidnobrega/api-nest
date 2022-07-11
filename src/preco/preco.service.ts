import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrecoModel } from './preco.model';
import { firstValueFrom } from 'rxjs';

const BASE_URL = 'https://api.awsli.com.br';

@Injectable()
export class PrecoService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<PrecoModel> {
    const { data } = await this.httpService.axiosRef.get(
      `${BASE_URL}/v1/produto_preco`,
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

  async getPreco(idPreco: number): Promise<PrecoModel> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${BASE_URL}/v1/produto_preco/${idPreco}`, {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      }),
    );
    return data;
  }

  async putPreco(body: any, idPreco: number): Promise<PrecoModel> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(`${BASE_URL}/v1/produto_preco/${idPreco}`, body, {
          headers: {
            Authorization:
              'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
          },
        }),
      );
      console.log(data);

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

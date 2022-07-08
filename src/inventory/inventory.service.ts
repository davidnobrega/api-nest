import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { InventoryModel } from './inventory.model';

const BASE_URL = 'https://api.awsli.com.br';

@Injectable()
export class InventoryService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<InventoryModel> {
    const { data } = await this.httpService.axiosRef.get(
      `${BASE_URL}/v1/produto_estoque`,
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

  async getInventory(idInventory: number): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${BASE_URL}/v1/produto_estoque/${idInventory}`, {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      }),
    );
    return data;
  }
  async putInventory(body: any, idInventory: number): Promise<InventoryModel> {
    const { data } = await firstValueFrom(
      this.httpService.put(
        `${BASE_URL}/v1/produto_estoque/${idInventory}`,
        body,
        {
          headers: {
            Authorization:
              'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
          },
        },
      ),
    );
    return data;
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ProductModel } from './produtos.model';

const BASE_URL = 'https://api.awsli.com.br';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<ProductModel> {
    const { data } = await this.httpService.axiosRef.get(
      `${BASE_URL}/v1/produto`,
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

  async getProduct(idProduct: number): Promise<ProductModel> {
    const { data } = await this.httpService.axiosRef.get(
      `${BASE_URL}/v1/produto/${idProduct}`,
      {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      },
    );

    return data;
  }

  async postProduct(body: any): Promise<ProductModel> {
    const { data } = await this.httpService.axiosRef.post(
      `${BASE_URL}/v1/produto/`,
      body,
      {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      },
    );

    return data;
  }

  async putProduct(body: any, idProduct: number): Promise<ProductModel> {
    const { data } = await this.httpService.axiosRef.put(
      `${BASE_URL}/v1/produto/${idProduct}`,
      body,
      {
        headers: {
          Authorization:
            'chave_api 146c5d3f1fe4a19ad46d aplicacao bb53fd2d-7e5c-407e-b4d7-fea32603697f',
        },
      },
    );

    return data;
  }
}

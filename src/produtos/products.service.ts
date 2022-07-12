import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { ProductModel } from './produtos.model';

const BASE_URL = 'https://api.awsli.com.br';

@Injectable()
export class ProductsService {
  public get httpService(): HttpService {
    return this._httpService;
  }
  constructor(
    @InjectRepository(ProductModel)
    private productRepository: Repository<ProductModel>,
    private readonly _httpService: HttpService,
    @InjectModel(ProductModel.name)
    private productModel: Model<ProductModel>,
  ) {}

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

    const createProductSQL = this.productRepository.save(data);
    const createProduct = new this.productModel(data);
    return createProduct.save(), createProductSQL;
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

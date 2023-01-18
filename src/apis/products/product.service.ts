import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create({ createProductInput }) {
    const result = await this.productRepository.save({
      ...createProductInput,
      // 하나하나 직접 입력하는 방식
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
    });
    return result;
  }
}

import { InputType, PartialType, PickType, OmitType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
// PickType(CreateProductInput, ["name", "price"]) 추가
// OmitType(CreateProductInput, ["description"]) 제거

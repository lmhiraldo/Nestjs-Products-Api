import { IsString, IsNumber, IsUrl, IsDate } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsUrl()
  readonly imageURL: string;

  @IsNumber()
  readonly price: number;

  @IsDate()
  readonly createdAt: Date;
}

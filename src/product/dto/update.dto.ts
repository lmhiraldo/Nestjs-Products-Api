import { IsString, IsUrl, IsNumber, IsOptional, IsDate } from 'class-validator';

export class UpdateProductDTO {
  @IsString({ message: 'El nombre debe ser una cadena de caracteres.' })
  @IsOptional()
  readonly name?: string;

  @IsString({ message: 'La descripción debe ser una cadena de caracteres.' })
  @IsOptional()
  readonly description?: string;

  @IsUrl({}, { message: 'La URL de la imagen no es válida.' })
  @IsOptional()
  readonly imageURL?: string;

  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @IsOptional()
  readonly price?: number;

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;
}


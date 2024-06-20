import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UsersUpdateDto {
  @IsOptional()
  @IsNotEmpty({ message: "Ім'я не має бути пустим" })
  @IsString({ message: "Ім'я має бути рядком" })
  @MinLength(2, { message: "Ім'я дуже коротке" })
  @MaxLength(50, { message: "Ім'я дуже довге" })
  firstName: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Прізвище не має бути пустим' })
  @IsString({ message: 'Прізвище має бути рядком' })
  @MinLength(2, { message: 'Прізвище дуже коротке' })
  @MaxLength(50, { message: 'Прізвище дуже довге' })
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  profile: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Email не може бути пустим' })
  @IsEmail({}, { message: 'Неправильний email' })
  email: string;
}

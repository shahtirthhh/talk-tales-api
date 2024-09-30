import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class UserRegister {
  @IsMobilePhone()
  @IsNotEmpty()
  mobile: string;
}
export class UserLoginDTO {
  @IsMobilePhone()
  @IsNotEmpty()
  mobile: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

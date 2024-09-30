import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegister } from 'src/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  login(@Body() body: UserRegister) {
    this.authService.register(body.mobile);
  }
}

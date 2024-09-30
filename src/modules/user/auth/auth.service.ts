import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

  async register(mobile: string) {
    await this.send_otp(mobile);
  }

  send_otp(mobile: string) {}
}

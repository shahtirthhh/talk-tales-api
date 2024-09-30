import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ default: null })
  mobile: string;

  @Prop({ default: null })
  password: string;

  @Prop({ default: null })
  firstName: string;

  @Prop({ default: null })
  lastName: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: null })
  updatedAt: Date;

  @Prop({ default: null })
  deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'user' })
export class User extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

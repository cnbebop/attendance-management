import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Scheduling extends Document {
  @Prop()
  userId: string;

  @Prop()
  date: string;

  @Prop()
  work: boolean;

  @Prop()
  type: string;
}

export type SchedulingDocument = Scheduling & Document;

export const SchedulingSchema = SchemaFactory.createForClass(Scheduling);
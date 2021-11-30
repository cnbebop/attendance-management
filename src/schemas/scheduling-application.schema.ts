import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'schduling-application' })
export class SchedulingApplication extends Document {
  @Prop()
  id: string;

  @Prop()
  type: string;

  @Prop()
  date: string;
}

export type SchedulingApplicationDocument = SchedulingApplication & Document;

export const SchedulingApplicationSchema = SchemaFactory.createForClass(SchedulingApplication);
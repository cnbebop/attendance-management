import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'overtime-application' })
export class OvertimeApplication extends Document {
  @Prop()
  id: string;

  @Prop()
  date: string;

  @Prop()
  startTime: string;

  @Prop()
  endTime: string;

  @Prop()
  restStartTime: string;

  @Prop()
  restEndTime: string;

  @Prop()
  payType: number;

  @Prop()
  inCompany: boolean;

  @Prop()
  reason: string;
}

export type OvertimeApplicationDocument = OvertimeApplication & Document;

export const OvertimeApplicationSchema =
  SchemaFactory.createForClass(OvertimeApplication);

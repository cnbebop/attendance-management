import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  OvertimeApplication,
  OvertimeApplicationSchema,
} from './schemas/overtime-application.schema';
import { Scheduling, SchedulingSchema } from './schemas/scheduling.schema';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/attendance'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: OvertimeApplication.name, schema: OvertimeApplicationSchema },
    ]),
    MongooseModule.forFeature([
      { name: Scheduling.name, schema: SchedulingSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

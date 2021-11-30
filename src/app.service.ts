import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApplicationDto } from './dtos/application.dto';
import {
  OvertimeApplication,
  OvertimeApplicationDocument,
} from './schemas/overtime-application.schema';
import { SchedulingApplication, SchedulingApplicationDocument } from './schemas/scheduling-application.schema';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(OvertimeApplication.name)
    private applicationModel: Model<OvertimeApplicationDocument>,
    @InjectModel(SchedulingApplication.name)
    private schedulingApplicationModel: Model<SchedulingApplicationDocument>
  ) { }

  async getUserList() {
    return this.userModel.find().exec();
  }

  async createApplication(applicationDto: ApplicationDto) {
    return this.applicationModel.create(applicationDto);
  }

  async getApplications() {
    return this.applicationModel.find().exec();
  }

  async createSchedulingApplication(dto: SchedulingApplication) {
    return this.schedulingApplicationModel.create(dto);
  }

  async getSchedulingApplications() {
    return this.schedulingApplicationModel.find().exec();
  }
}

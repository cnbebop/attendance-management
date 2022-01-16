import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApplicationDto } from './dtos/application.dto';
import {
  OvertimeApplication,
  OvertimeApplicationDocument,
} from './schemas/overtime-application.schema';
import { Scheduling, SchedulingDocument } from './schemas/scheduling.schema';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(OvertimeApplication.name)
    private applicationModel: Model<OvertimeApplicationDocument>,
    @InjectModel(Scheduling.name)
    private schedulingApplicationModel: Model<SchedulingDocument>
  ) { }

  async getUserList() {
    return this.userModel.find().exec();
  }

  async createApplication(applicationDto: ApplicationDto) {
    return this.applicationModel.create(applicationDto);
  }

  async getApplications() {
    return this.applicationModel.find().sort({ date: -1 }).exec();
  }

  async delteApplication(id: string) {
    return this.applicationModel.deleteOne({ _id: id });
  }

  async createSchedulingApplication(dtos: Scheduling[]) {
    return Promise.all(dtos.map((dto) => this.schedulingApplicationModel.findOneAndUpdate(
      { userId: dto.userId, date: dto.date },
      dto,
      { new: true, upsert: true, overwrite: true }
    )));
  }

  async getSchedulingApplications(startTime: string, endTime: string) {
    return this.userModel.aggregate([
      {
        $lookup: {
          from: "schedulings",
          localField: "id",
          foreignField: "userId",
          let: {},
          pipeline: [
            { $match: { date: { $gte: startTime, $lte: endTime } } },
            { $project: { _id: 0, k: { $dateToString: { date: { $dateFromString: { dateString: "$date" } }, format: "%Y-%m-%d" } }, v: { work: "$work", type: "$type" } } },
            { $sort: { date: 1 } }
          ],
          as: "schedulings"
        }
      },
      { $project: { _id: 0, userId: "$id", userName: "$name", schedulings: { $arrayToObject: "$schedulings" } } }
    ]);
  }
}

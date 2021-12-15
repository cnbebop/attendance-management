import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApplicationDto } from './dtos/application.dto';
import { Scheduling } from './schemas/scheduling.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/query-users')
  getHello() {
    return this.appService.getUserList();
  }

  @Post('/create-application')
  async createApplication(@Body() applicationDto: ApplicationDto) {
    return this.appService.createApplication(applicationDto);
  }

  @Get('/query-applications')
  async getApplicationList() {
    return this.appService.getApplications();
  }

  @Post('/create-scheduling-application')
  async createSchedulingApplication(@Body() dtoList: Scheduling[]) {
    return this.appService.createSchedulingApplication(dtoList);
  }


  @Get('/query-scheduling-applications')
  async getSchedulingApplicationList(@Query() { startTime, endTime }: { startTime: string, endTime: string }) {
    return this.appService.getSchedulingApplications(startTime, endTime);
  }

}

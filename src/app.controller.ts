import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApplicationDto } from './dtos/application.dto';
import { SchedulingApplication } from './schemas/scheduling-application.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  async createSchedulingApplication(@Body() dto: SchedulingApplication) {
    return this.appService.createSchedulingApplication(dto);
  }


  @Get('/query-scheduling-applications')
  async getSchedulingApplicationList() {
    return this.appService.getSchedulingApplications();
  }

}

export class ApplicationDto {
  readonly id: string;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly restStartTime: string;
  readonly restEndTime: string;
  readonly payType: number;
  readonly inCompany: boolean;
  readonly reason: string;
}

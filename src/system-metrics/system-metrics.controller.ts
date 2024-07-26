import { Controller, Get } from '@nestjs/common';
import { SystemMetricsService } from './system-metrics.service';

@Controller('metrics')
export class SystemMetricsController {
  constructor(private readonly systemMetricsService: SystemMetricsService) {}

  @Get('cpu')
  getCpuUsage() {
    return this.systemMetricsService.getCpuUsage();
  }

  @Get('ram')
  getRamUsage() {
    return this.systemMetricsService.getRamUsage();
  }
}

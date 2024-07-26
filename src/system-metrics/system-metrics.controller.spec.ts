import { Test, TestingModule } from '@nestjs/testing';
import { SystemMetricsController } from './system-metrics.controller';

describe('SystemMetricsController', () => {
  let controller: SystemMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemMetricsController],
    }).compile();

    controller = module.get<SystemMetricsController>(SystemMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

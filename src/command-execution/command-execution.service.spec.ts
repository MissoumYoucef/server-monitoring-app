import { Test, TestingModule } from '@nestjs/testing';
import { CommandExecutionService } from './command-execution.service';

describe('CommandExecutionService', () => {
  let service: CommandExecutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandExecutionService],
    }).compile();

    service = module.get<CommandExecutionService>(CommandExecutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CommandExecutionController } from './command-execution.controller';

describe('CommandExecutionController', () => {
  let controller: CommandExecutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandExecutionController],
    }).compile();

    controller = module.get<CommandExecutionController>(CommandExecutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Controller, Post, Body } from '@nestjs/common';
import { CommandExecutionService } from './command-execution.service';

@Controller('command')
export class CommandExecutionController {
  constructor(private readonly commandExecutionService: CommandExecutionService) {}

  @Post('execute')
  executeCommand(@Body('command') command: string) {
    return this.commandExecutionService.executeCommand(command);
  }
}

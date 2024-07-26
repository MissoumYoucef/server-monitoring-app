import { Module } from '@nestjs/common';
import { CommandExecutionService } from './command-execution.service';
import { CommandExecutionController } from './command-execution.controller';

@Module({
  providers: [CommandExecutionService],
  controllers: [CommandExecutionController]
})
export class CommandExecutionModule {}

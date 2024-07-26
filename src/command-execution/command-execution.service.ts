import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class CommandExecutionService {
  async executeCommand(command: string): Promise<string> {
    const { stdout } = await execAsync(command);
    return stdout;
  }
}

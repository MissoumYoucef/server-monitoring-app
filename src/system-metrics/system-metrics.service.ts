import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class SystemMetricsService {
  async getCpuUsage(): Promise<string> {
    const { stdout } = await execAsync('top -bn1 | grep "Cpu(s)"');
    return stdout;
  }

  async getRamUsage(): Promise<string> {
    const { stdout } = await execAsync('free -m');
    return stdout;
  }
}

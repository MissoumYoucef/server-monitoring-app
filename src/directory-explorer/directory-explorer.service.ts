import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class DirectoryExplorerService {
  async listDirectory(path: string): Promise<string> {
    const { stdout } = await execAsync(`ls -la ${path}`);
    return stdout;
  }

  async createFile(path: string, filename: string): Promise<string> {
    const { stdout } = await execAsync(`touch ${path}/${filename}`);
    return stdout;
  }

  async deleteFile(path: string, filename: string): Promise<string> {
    const { stdout } = await execAsync(`rm ${path}/${filename}`);
    return stdout;
  }
}

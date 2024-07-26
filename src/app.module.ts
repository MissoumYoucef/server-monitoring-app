import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemMetricsModule } from './system-metrics/system-metrics.module';
import { DirectoryExplorerModule } from './directory-explorer/directory-explorer.module';
import { CommandExecutionModule } from './command-execution/command-execution.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SystemMetricsModule, DirectoryExplorerModule, CommandExecutionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { DirectoryExplorerService } from './directory-explorer.service';
import { DirectoryExplorerController } from './directory-explorer.controller';

@Module({
  providers: [DirectoryExplorerService],
  controllers: [DirectoryExplorerController]
})
export class DirectoryExplorerModule {}

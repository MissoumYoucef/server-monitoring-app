import { Controller, Get, Post, Delete, Body, Query } from '@nestjs/common';
import { DirectoryExplorerService } from './directory-explorer.service';

@Controller('directory')
export class DirectoryExplorerController {
  constructor(private readonly directoryExplorerService: DirectoryExplorerService) {}

  @Get('list')
  listDirectory(@Query('path') path: string) {
    return this.directoryExplorerService.listDirectory(path);
  }

  @Post('create')
  createFile(@Body('path') path: string, @Body('filename') filename: string) {
    return this.directoryExplorerService.createFile(path, filename);
  }

  @Delete('delete')
  deleteFile(@Body('path') path: string, @Body('filename') filename: string) {
    return this.directoryExplorerService.deleteFile(path, filename);
  }
}

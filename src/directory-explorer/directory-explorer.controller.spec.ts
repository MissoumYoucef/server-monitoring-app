import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryExplorerController } from './directory-explorer.controller';

describe('DirectoryExplorerController', () => {
  let controller: DirectoryExplorerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoryExplorerController],
    }).compile();

    controller = module.get<DirectoryExplorerController>(DirectoryExplorerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

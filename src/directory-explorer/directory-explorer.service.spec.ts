import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryExplorerService } from './directory-explorer.service';

describe('DirectoryExplorerService', () => {
  let service: DirectoryExplorerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectoryExplorerService],
    }).compile();

    service = module.get<DirectoryExplorerService>(DirectoryExplorerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

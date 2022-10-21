import { Test, TestingModule } from '@nestjs/testing';
import { ActivityTransactionService } from './activity-transaction.service';

describe('ActivityTransactionService', () => {
  let service: ActivityTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityTransactionService],
    }).compile();

    service = module.get<ActivityTransactionService>(ActivityTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

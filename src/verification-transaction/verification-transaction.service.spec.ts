import { Test, TestingModule } from '@nestjs/testing';
import { VerificationTransactionService } from './verification-transaction.service';

describe('VerificationTransactionService', () => {
  let service: VerificationTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerificationTransactionService],
    }).compile();

    service = module.get<VerificationTransactionService>(VerificationTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

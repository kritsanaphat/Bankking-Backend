import { Test, TestingModule } from '@nestjs/testing';
import { OtpTransactionService } from './otp-transaction.service';

describe('OtpTransactionService', () => {
  let service: OtpTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtpTransactionService],
    }).compile();

    service = module.get<OtpTransactionService>(OtpTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { VerificationTransactionController } from './verification-transaction.controller';
import { VerificationTransactionService } from './verification-transaction.service';

describe('VerificationTransactionController', () => {
  let controller: VerificationTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerificationTransactionController],
      providers: [VerificationTransactionService],
    }).compile();

    controller = module.get<VerificationTransactionController>(VerificationTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

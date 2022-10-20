import { Test, TestingModule } from '@nestjs/testing';
import { OtpTransactionController } from './otp-transaction.controller';
import { OtpTransactionService } from './otp-transaction.service';

describe('OtpTransactionController', () => {
  let controller: OtpTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtpTransactionController],
      providers: [OtpTransactionService],
    }).compile();

    controller = module.get<OtpTransactionController>(OtpTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ActivityTransactionController } from './activity-transaction.controller';
import { ActivityTransactionService } from './activity-transaction.service';

describe('ActivityTransactionController', () => {
  let controller: ActivityTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityTransactionController],
      providers: [ActivityTransactionService],
    }).compile();

    controller = module.get<ActivityTransactionController>(ActivityTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

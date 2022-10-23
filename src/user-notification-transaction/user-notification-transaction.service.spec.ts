import { Test, TestingModule } from '@nestjs/testing';
import { UserNotificationTransactionService } from './user-notification-transaction.service';

describe('UserNotificationTransactionService', () => {
  let service: UserNotificationTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserNotificationTransactionService],
    }).compile();

    service = module.get<UserNotificationTransactionService>(UserNotificationTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

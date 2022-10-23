import { Test, TestingModule } from '@nestjs/testing';
import { UserNotificationTransactionController } from './user-notification-transaction.controller';
import { UserNotificationTransactionService } from './user-notification-transaction.service';

describe('UserNotificationTransactionController', () => {
  let controller: UserNotificationTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserNotificationTransactionController],
      providers: [UserNotificationTransactionService],
    }).compile();

    controller = module.get<UserNotificationTransactionController>(UserNotificationTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

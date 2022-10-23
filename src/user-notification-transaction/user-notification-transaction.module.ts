import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserNotificationTransactionService } from './user-notification-transaction.service';
import { UserNotificationTransactionController } from './user-notification-transaction.controller';
import { UserNotificationTransaction } from './entities/user-notification-transaction.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserNotificationTransaction]),
  ],
  controllers: [UserNotificationTransactionController],
  providers: [UserNotificationTransactionService]
})
export class UserNotificationTransactionModule {}

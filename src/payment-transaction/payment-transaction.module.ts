import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentTransactionService } from './payment-transaction.service';
import { PaymentTransactionController } from './payment-transaction.controller';
import { PaymentTransaction } from './entities/payment-transaction.entity'
import { HttpModule } from '@nestjs/axios';
import { UserNotificationTransaction } from 'src/user-notification-transaction/entities/user-notification-transaction.entity';
import { UserNotificationTransactionService } from 'src/user-notification-transaction/user-notification-transaction.service';
import { UserNotificationTransactionModule } from 'src/user-notification-transaction/user-notification-transaction.module';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([PaymentTransaction]),
  
    
  ],
  controllers: [PaymentTransactionController],
  providers: [PaymentTransactionService]
})
export class PaymentTransactionModule {}

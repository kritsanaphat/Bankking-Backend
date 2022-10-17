import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import{ PaymentTransaction } from './entities/payment-transaction.entity'

import { PaymentTransactionService } from './payment-transaction.service';
import { PaymentTransactionController } from './payment-transaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTransaction])],
  controllers: [PaymentTransactionController],
  providers: [PaymentTransactionService]
})
export class PaymentTransactionModule {}

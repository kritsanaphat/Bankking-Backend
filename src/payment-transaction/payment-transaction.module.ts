import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentTransactionService } from './payment-transaction.service';
import { PaymentTransactionController } from './payment-transaction.controller';
import { PaymentTransaction } from './entities/payment-transaction.entity'
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([PaymentTransaction]),
    
  ],
  controllers: [PaymentTransactionController],
  providers: [PaymentTransactionService]
})
export class PaymentTransactionModule {}

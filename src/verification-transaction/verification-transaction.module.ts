import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VerificationTransactionService } from './verification-transaction.service';
import { VerificationTransactionController } from './verification-transaction.controller';
import { VerificationTransaction } from './entities/verification-transaction.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([VerificationTransaction]),
  ],
  controllers: [VerificationTransactionController],
  providers: [VerificationTransactionService]
})
export class VerificationTransactionModule {}

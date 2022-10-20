import { Module } from '@nestjs/common';
import { OtpTransactionService } from './otp-transaction.service';
import { OtpTransactionController } from './otp-transaction.controller';

@Module({
  controllers: [OtpTransactionController],
  providers: [OtpTransactionService]
})
export class OtpTransactionModule {}

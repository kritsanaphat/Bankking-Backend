import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtpTransaction } from './entities/otp-transaction.entity';

import { OtpTransactionService } from './otp-transaction.service';
import { OtpTransactionController } from './otp-transaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OtpTransaction])],
  controllers: [OtpTransactionController],
  providers: [OtpTransactionService]
})
export class OtpTransactionModule {}

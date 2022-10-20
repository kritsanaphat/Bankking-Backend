import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentTransactionModule } from './payment-transaction/payment-transaction.module';
import { OtpTransactionModule } from './otp-transaction/otp-transaction.module';

@Module({
  imports: [PaymentTransactionModule, OtpTransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

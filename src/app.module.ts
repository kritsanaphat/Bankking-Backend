import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentTransactionModule } from './payment-transaction/payment-transaction.module';
import { OtpTransactionModule } from './otp-transaction/otp-transaction.module';
import { PaymentTransaction } from './payment-transaction/entities/payment-transaction.entity';
import { OtpTransaction } from './otp-transaction/entities/otp-transaction.entity';
import { PaymentGatewayApitransactionModule } from './payment-gateway-apitransaction/payment-gateway-apitransaction.module';
import { PaymentGatewayApitransaction } from './payment-gateway-apitransaction/entities/payment-gateway-apitransaction.entity';
import { VerificationTransactionModule } from './verification-transaction/verification-transaction.module';
import { VerificationTransaction } from './verification-transaction/entities/verification-transaction.entity';
import { ActivityTransactionModule } from './activity-transaction/activity-transaction.module';
import { ActivityTransaction } from './activity-transaction/entities/activity-transaction.entity';
import { UserNotificationTransactionModule } from './user-notification-transaction/user-notification-transaction.module';
// const transactionDB: TypeOrmModuleOptions = {
//   type: 'postgres',
//   port: 5432,
//   username: 'postgres1',
//   password: 'kritsanaphat1',
//   database: 'transaction',
//   synchronize: true,
// }
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres1',
      password: 'kritsanaphat1',
      database: 'transaction',
      entities: [
                PaymentTransaction,
                OtpTransaction,
                PaymentGatewayApitransaction,
                VerificationTransaction,
                ActivityTransaction
              ],
      synchronize: true,
    }),
     PaymentTransactionModule,
     OtpTransactionModule,
     PaymentGatewayApitransactionModule,
     VerificationTransactionModule,
     ActivityTransactionModule,
     UserNotificationTransactionModule,
     
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

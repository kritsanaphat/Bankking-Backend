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
import { ActivityTransactionModule } from './activity-transaction/activity-transaction.module';
import { ActivityTransaction } from './activity-transaction/entities/activity-transaction.entity';
import { UserNotificationTransactionModule } from './user-notification-transaction/user-notification-transaction.module';
import { UserNotificationTransaction } from './user-notification-transaction/entities/user-notification-transaction.entity';

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
                ActivityTransaction,
                UserNotificationTransaction
              ],
      synchronize: true,
    }),
     PaymentTransactionModule,
     OtpTransactionModule,
     PaymentGatewayApitransactionModule,
     ActivityTransactionModule,
     UserNotificationTransactionModule,
     
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

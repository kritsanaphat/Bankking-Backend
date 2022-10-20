import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentTransactionModule } from './payment-transaction/payment-transaction.module';
import{ PaymentTransaction } from './payment-transaction/entities/payment-transaction.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { OtpTransactionModule } from './otp-transaction/otp-transaction.module';
import { OtpTransaction} from './otp-transaction/entities/otp-transaction.entity'

class databaseTransaction {
  type: 'postgres'
  port: 5432
  username: 'postgres'
  password: 'kritsanaphat'
  database: 'transaction'
  synchronize: true
  host: 'localhost'

};


@Module({
  imports: [
    PaymentTransactionModule,
    OtpTransactionModule,
    TypeOrmModule.forRoot({
      ...databaseTransaction,
      name: 'paymentTransaction',
      entities: [PaymentTransaction],
    }),
    TypeOrmModule.forRoot({
      ...databaseTransaction,
      name: 'otpTransaction',
      entities: [OtpTransaction],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


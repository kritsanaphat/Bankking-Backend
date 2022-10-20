import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentTransactionModule } from './payment-transaction/payment-transaction.module';
import{ PaymentTransaction } from './payment-transaction/entities/payment-transaction.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { OtpTransactionModule } from './otp-transaction/otp-transaction.module';
import { OtpTransaction} from './otp-transaction/entities/otp-transaction.entity'

@Module({
  imports: [
    PaymentTransactionModule,
    OtpTransactionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'userPaymentTransaction',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kritsanaphat',
      entities: [PaymentTransaction],
      synchronize: true,
      migrations: ['./src/migrations/*.ts'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'otpTransaction',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kritsanaphat',
      entities: [OtpTransaction],
      synchronize: true,
      migrations: ['./src/migrations/*.ts'],
    })
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentTransactionModule } from './payment-transaction/payment-transaction.module';
import { OtpTransactionModule } from './otp-transaction/otp-transaction.module';
import { PaymentTransaction } from './payment-transaction/entities/payment-transaction.entity';
import { OtpTransaction } from './otp-transaction/entities/otp-transaction.entity';

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
      entities: [PaymentTransaction,OtpTransaction],
      synchronize: true,
    }),
     PaymentTransactionModule,
     OtpTransactionModule,
     
     
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

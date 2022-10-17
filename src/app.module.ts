import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentTransactionModule } from './payment-transaction/payment-transaction.module';
import{ PaymentTransaction } from './payment-transaction/entities/payment-transaction.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


@Module({
  imports: [
    PaymentTransactionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'payment-transaction',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kritsanaphat',
      entities: [PaymentTransaction],
      synchronize: true,
      migrations: ['./src/migrations/*.ts'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


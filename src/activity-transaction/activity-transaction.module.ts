import { Module } from '@nestjs/common';
import { ActivityTransactionService } from './activity-transaction.service';
import { ActivityTransactionController } from './activity-transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityTransaction } from './entities/activity-transaction.entity';

@Module({
  imports:([
    TypeOrmModule.forFeature([ActivityTransaction])
  ]),
  controllers: [ActivityTransactionController],
  providers: [ActivityTransactionService]
})
export class ActivityTransactionModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateActivityTransactionDto } from './dto/create-activity-transaction.dto';
import { UpdateActivityTransactionDto } from './dto/update-activity-transaction.dto';
import { ActivityTransaction } from './entities/activity-transaction.entity';

@Injectable()
export class ActivityTransactionService {
  constructor(
    @InjectRepository(ActivityTransaction)
    private ActivityTransactionRepository: Repository<ActivityTransaction>
  ){}

  create(createActivityTransactionDto: CreateActivityTransactionDto) {
    return this.ActivityTransactionRepository.create(createActivityTransactionDto)
  }

  findAll() {
    return this.ActivityTransactionRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} activityTransaction`;
  // }

  // update(id: number, updateActivityTransactionDto: UpdateActivityTransactionDto) {
  //   return `This action updates a #${id} activityTransaction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} activityTransaction`;
  // }
}

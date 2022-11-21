import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
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

  async create(createActivityTransactionDto: CreateActivityTransactionDto) {
    const temp = await this.ActivityTransactionRepository.save(createActivityTransactionDto)
    const response = {
      accountID : temp.accountID,
      messege: "OK"
    }
    return response
  }

  findAll() {
    return this.ActivityTransactionRepository.find()
  }
}

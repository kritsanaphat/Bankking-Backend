import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateVerificationTransactionDto } from './dto/create-verification-transaction.dto';
import { UpdateVerificationTransactionDto } from './dto/update-verification-transaction.dto';
import { VerificationTransaction } from './entities/verification-transaction.entity';
@Injectable()
export class VerificationTransactionService {
  
  constructor(
    @InjectRepository(VerificationTransaction)
    private VerificationTransactionRepository: Repository<VerificationTransaction>,
  ) {}

  create(createVerificationTransactionDto: CreateVerificationTransactionDto) {
    return this.VerificationTransactionRepository.save(createVerificationTransactionDto)
  }

  findAll() {
    return this.VerificationTransactionRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} verificationTransaction`;
  // }

  // update(id: number, updateVerificationTransactionDto: UpdateVerificationTransactionDto) {
  //   return `This action updates a #${id} verificationTransaction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} verificationTransaction`;
  // }
}

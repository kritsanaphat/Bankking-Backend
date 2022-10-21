import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateOtpTransactionDto } from './dto/create-otp-transaction.dto';
import { UpdateOtpTransactionDto } from './dto/update-otp-transaction.dto';
import { OtpTransaction } from './entities/otp-transaction.entity';


@Injectable()
export class OtpTransactionService {
  constructor(
    @InjectRepository(OtpTransaction)
    private OtpTransactionRepository:Repository<OtpTransaction>,
  ){}

  create(createOtpTransactionDto: CreateOtpTransactionDto) {
    return this.OtpTransactionRepository.save(createOtpTransactionDto)
  }

  findAll(): Promise<OtpTransaction[]>{
    return this.OtpTransactionRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} otpTransaction`;
  // }

  update(id: number, updateOtpTransactionDto: UpdateOtpTransactionDto) {
    return this.OtpTransactionRepository.update(id,updateOtpTransactionDto)
  }

  async remove(id: string): Promise<void> {
    await this.OtpTransactionRepository.delete(id);
  }
}

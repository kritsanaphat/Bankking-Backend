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

  async create(createOtpTransactionDto: CreateOtpTransactionDto) {
    const temp = await this.OtpTransactionRepository.save(createOtpTransactionDto) as CreateOtpTransactionDto
    const response = {
      transactionID : temp.transactionID,
      message : "OK"
    }
    return response
  }

  findAll(): Promise<OtpTransaction[]>{
    return this.OtpTransactionRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.OtpTransactionRepository.delete(id);
  }
  async update(id: string, updateOtpTransactionDto : UpdateOtpTransactionDto) {
    const isFinishdToUpdate = await this.OtpTransactionRepository.findOneBy ({
      transactionID: id,
  })
    isFinishdToUpdate.isFinished = true
    return this.OtpTransactionRepository.save(isFinishdToUpdate)
  }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, Between } from 'typeorm';

import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import{ PaymentTransaction } from './entities/payment-transaction.entity'


@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private PaymentTransactionRepository: Repository<PaymentTransaction>,
  ) {}

  create(createPaymentTransactionDto: CreatePaymentTransactionDto) {
    return this.PaymentTransactionRepository.save(createPaymentTransactionDto)
  }

  findAll(): Promise<PaymentTransaction[]> {
    return this.PaymentTransactionRepository.find();
  }


  findOne(createdAt: string): Promise<PaymentTransaction[]> {

    const date = this.PaymentTransactionRepository.find({
      where: {
          created_at: Between(
              new Date(createdAt+',1'), 
              new Date(createdAt+',31')
          ),
      }
    })
    return date
  }


  // update(id: number, updatePaymentTransactionDto: UpdatePaymentTransactionDto) {
  //   return this.PaymentTransactionRepository.update(id,updatePaymentTransactionDto)
  // }

  // async remove(id: string): Promise<void> {
  //   await this.PaymentTransactionRepository.delete(id);
  // }
}

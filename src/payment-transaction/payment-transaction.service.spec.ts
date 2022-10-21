import { Injectable } from '@nestjs/common';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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


  // findOne(id: string): Promise<PaymentTransaction> {
  //   return this.PaymentTransactionRepository.findOneBy(id);
  // }

  update(id: number, updatePaymentTransactionDto: UpdatePaymentTransactionDto) {
    return this.PaymentTransactionRepository.update(id,updatePaymentTransactionDto)
  }

  async remove(id: string): Promise<void> {
    await this.PaymentTransactionRepository.delete(id);
  }
}

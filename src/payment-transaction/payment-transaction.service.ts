import { Injectable } from '@nestjs/common';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';

@Injectable()
export class PaymentTransactionService {
  create(createPaymentTransactionDto: CreatePaymentTransactionDto) {
    return 'This action adds a new paymentTransaction';
  }

  findAll() {
    return `This action returns all paymentTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentTransaction`;
  }

  update(id: number, updatePaymentTransactionDto: UpdatePaymentTransactionDto) {
    return `This action updates a #${id} paymentTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentTransaction`;
  }
}

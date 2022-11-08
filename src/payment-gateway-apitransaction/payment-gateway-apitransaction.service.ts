import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePaymentGatewayApitransactionDto } from './dto/create-payment-gateway-apitransaction.dto';
import { UpdatePaymentGatewayApitransactionDto } from './dto/update-payment-gateway-apitransaction.dto';
import { PaymentGatewayApitransaction } from './entities/payment-gateway-apitransaction.entity';


@Injectable()
export class PaymentGatewayApitransactionService {
  constructor(
    @InjectRepository(PaymentGatewayApitransaction)
    private PaymentGatewayApitransactionRepository:Repository<PaymentGatewayApitransaction>,
  ){}
         
  create (createPaymentGatewayApitransactionDto: CreatePaymentGatewayApitransactionDto) {
    return this.PaymentGatewayApitransactionRepository.save(createPaymentGatewayApitransactionDto)
  }
  

  findAll(): Promise<PaymentGatewayApitransaction[]>{
    return this.PaymentGatewayApitransactionRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} otpTransaction`;
  // }

  async update(id: string, updatePaymentGatewayApitransactionDto : UpdatePaymentGatewayApitransactionDto) {
    const isFinishToUpdate = await this.PaymentGatewayApitransactionRepository.findOneBy ({
      transactionID: id,
  })
    isFinishToUpdate.isFinish = true
    return this.PaymentGatewayApitransactionRepository.save(isFinishToUpdate)
  }

  async remove(id: string): Promise<void> {
    await this.PaymentGatewayApitransactionRepository.delete(id);
  }
  
}

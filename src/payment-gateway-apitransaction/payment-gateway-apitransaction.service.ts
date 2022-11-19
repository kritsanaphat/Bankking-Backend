import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePaymentGatewayApitransactionDto } from './dto/create-payment-gateway-apitransaction.dto';
import { UpdatePaymentGatewayApitransactionDto } from './dto/update-payment-gateway-apitransaction.dto';
import { PaymentGatewayApitransaction } from './entities/payment-gateway-apitransaction.entity';
import { CreateUserNotificationTransactionDto } from 'src/user-notification-transaction/dto/create-user-notification-transaction.dto';


@Injectable()
export class PaymentGatewayApitransactionService {
  constructor(
    @InjectRepository(PaymentGatewayApitransaction)
    private PaymentGatewayApitransactionRepository:Repository<PaymentGatewayApitransaction>,
  ){}
         
  async create (createPaymentGatewayApitransactionDto: CreatePaymentGatewayApitransactionDto) {
    const temp = await this.PaymentGatewayApitransactionRepository.save(createPaymentGatewayApitransactionDto) as PaymentGatewayApitransaction
    const response = {
      shopID: temp.shopID, 
      message: "OK"
    }
    return  response
  
  }
  

  findAll(): Promise<PaymentGatewayApitransaction[]>{
    return this.PaymentGatewayApitransactionRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} otpTransaction`;
  // }

  async update(id: string, updatePaymentGatewayApitransactionDto : UpdatePaymentGatewayApitransactionDto) {
    const isFinishToUpdate = await this.PaymentGatewayApitransactionRepository.findOneBy ({
      shopID: id,
  })
    isFinishToUpdate.isFinish = true
    return this.PaymentGatewayApitransactionRepository.save(isFinishToUpdate)
  }

  async remove(id: string): Promise<void> {
    await this.PaymentGatewayApitransactionRepository.delete(id);
  }
  
}

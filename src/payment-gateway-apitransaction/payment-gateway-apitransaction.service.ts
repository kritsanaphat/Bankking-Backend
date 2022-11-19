import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePaymentGatewayApitransactionDto } from './dto/create-payment-gateway-apitransaction.dto';
import { UpdatePaymentGatewayApitransactionDto } from './dto/update-payment-gateway-apitransaction.dto';
import { PaymentGatewayApitransaction } from './entities/payment-gateway-apitransaction.entity';
import { CreateUserNotificationTransactionDto } from 'src/user-notification-transaction/dto/create-user-notification-transaction.dto';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class PaymentGatewayApitransactionService {
  constructor(
    @InjectRepository(PaymentGatewayApitransaction)
    private PaymentGatewayApitransactionRepository:Repository<PaymentGatewayApitransaction>,
    private readonly httpService: HttpService

  ){}
         
  async create (createPaymentGatewayApitransactionDto: CreatePaymentGatewayApitransactionDto) {
    const temp = await this.PaymentGatewayApitransactionRepository.save(createPaymentGatewayApitransactionDto) as PaymentGatewayApitransaction
    const data: CreateUserNotificationTransactionDto = {
      accountID: createPaymentGatewayApitransactionDto.shopID,
      transactionID: temp.transactionID
    }
    console.log(data)
    const createNotofication = await this.httpService.axiosRef.post("http://localhost:3001/user-notification-transaction",data)
    
    const response = {
      shopID: createPaymentGatewayApitransactionDto.shopID, 
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
      transactionID: id,
  })
    isFinishToUpdate.isFinish = true
    return this.PaymentGatewayApitransactionRepository.save(isFinishToUpdate)
  }

  async remove(id: string): Promise<void> {
    await this.PaymentGatewayApitransactionRepository.delete(id);
  }
  
}

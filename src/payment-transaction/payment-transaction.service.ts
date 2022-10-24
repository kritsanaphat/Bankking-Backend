import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
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
    var newCreatedAt = (createdAt.split(","))
    const num = newCreatedAt.length
    const p = Promise.resolve([]);
    for(let i=0 ; i<num;i++){
      // console.log("1")
      var dateTemp = newCreatedAt.pop()
      var date = this.PaymentTransactionRepository.find({
      where: {
        created_at: Between(
          new Date(dateTemp+',1'), 
          new Date(dateTemp+',31')
          
        ),
    }
    })
   
    // date.then(response => console.log("2",dateTemp,newCreatedAt))
  }
    return date    
    }
    
  


  // update(id: number, updatePaymentTransactionDto: UpdatePaymentTransactionDto) {
  //   return this.PaymentTransactionRepository.update(id,updatePaymentTransactionDto)
  // }

  // async remove(id: string): Promise<void> {
  //   await this.PaymentTransactionRepository.delete(id);
  // }
}

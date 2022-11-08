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

  findbyMonth(createdAt: string): Promise<PaymentTransaction[]> {
    //  s => startDate
    //  e => endDate
    
    var newCreatedAt = (createdAt.split(","))
    const num = newCreatedAt.length
    console.log(num)
    if(num == 1){
      var dateTemp1 = newCreatedAt.pop()
    const d = this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ("(d.created_at > :s1 and d.created_at < :e1)", 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")})
        .getMany();
        console.log("Return...")
        return d
    }
    if(num == 2){
      var dateTemp1 = newCreatedAt.pop()
      var dateTemp2 = newCreatedAt.pop()
    const d = this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ("(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)", 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
      ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")})
        .getMany();
        console.log("Return...")
        return d
    }

    else if(num == 3){
      var dateTemp1 = newCreatedAt.pop()
      var dateTemp2 = newCreatedAt.pop()
      var dateTemp3 = newCreatedAt.pop()
    const d = this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
      ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
      ,s3: new Date(dateTemp2+",1"),e3: new Date(dateTemp3+",31")
    
    })
        .getMany();
        console.log("Return...")
        return d
    }

    else if(num == 4){
      var dateTemp1 = newCreatedAt.pop()
      var dateTemp2 = newCreatedAt.pop()
      var dateTemp3 = newCreatedAt.pop()
      var dateTemp4 = newCreatedAt.pop()
    const d = this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)or (d.created_at > :s4 and d.created_at < :e4)', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
      ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
      ,s3: new Date(dateTemp3+",1"),e3: new Date(dateTemp3+",31")
      ,s4: new Date(dateTemp4+",1"),e4: new Date(dateTemp4+",31")

    })
        .getMany();
        console.log("Return...")
        return d
    }

    else if(num == 5){
      var dateTemp1 = newCreatedAt.pop()
      var dateTemp2 = newCreatedAt.pop()
      var dateTemp3 = newCreatedAt.pop()
      var dateTemp4 = newCreatedAt.pop()
      var dateTemp5 = newCreatedAt.pop()
    const d = this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)or (d.created_at > :s4 and d.created_at < :e4 )or (d.created_at > :s5 or d.created_at < :e5 )', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
      ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
      ,s3: new Date(dateTemp3+",1"),e3: new Date(dateTemp3+",31")
      ,s4: new Date(dateTemp4+",1"),e4: new Date(dateTemp4+",31")
      ,s5: new Date(dateTemp5+",1"),e5: new Date(dateTemp5+",31")

    })
        .getMany();
        console.log("Return...")
        return d
    }

    else if(num == 6){
      var dateTemp1 = newCreatedAt.pop()
      var dateTemp2 = newCreatedAt.pop()
      var dateTemp3 = newCreatedAt.pop()
      var dateTemp4 = newCreatedAt.pop()
      var dateTemp5 = newCreatedAt.pop()
      var dateTemp6 = newCreatedAt.pop()
    const d = this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)or (d.created_at > :s4 and d.created_at < :e4 )or (d.created_at > :s5 and d.created_at < :e5 )or (d.created_at > :s6 and d.created_at < :s6 )', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
      ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
      ,s3: new Date(dateTemp3+",1"),e3: new Date(dateTemp3+",31")
      ,s4: new Date(dateTemp4+",1"),e4: new Date(dateTemp4+",31")
      ,s5: new Date(dateTemp5+",1"),e5: new Date(dateTemp5+",31")
      ,s6: new Date(dateTemp6+",1"),e6: new Date(dateTemp6+",31")
    })
        .getMany();
        console.log("Return...")
        return d
    }

   
    }
    
  
  async findbyDate(createdAt: string): Promise<any>{
    var newCreatedAt = (createdAt.split(","))
    const num = newCreatedAt.length
    var dateTemp1 = newCreatedAt.pop()
    var dateTemp2 = newCreatedAt.pop()
    console.log(dateTemp1,dateTemp2)

    const d= await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where

        ("(d.created_at > :e1 and d.created_at < :s1)", 
        {s1: new Date(dateTemp1),e1: new Date(dateTemp2)})
        .getMany();
        console.log("Return...")
        let response = {}
        d.map((value,index)=>{
          const isIncome = value.type === PaymentTransaction.Payment_Type.RECEIVE || value.type === PaymentTransaction.Payment_Type.DEPOSIT
          const date = `${value.created_at.getDate()}/${value.created_at.getMonth() + 1}/${value.created_at.getFullYear()}`
          if (response[date]) {
            if(isIncome){
              response[date].income += value.amount
              response[date].outcome += value.fee

            }
            else{
              response[date].outcome += value.amount+value.fee
            }

          } else {
            response[date] = {
              income : isIncome ? value.amount : 0,
              outcome : !isIncome ? value.amount+value.fee : 0
            }
          }
          // console.log(date)
          console.log(value.created_at.getDate(), value.amount , value.type, value.fee)
        })

        const ArrayResponse = []
        const keys = Object.keys(response)

        for (const key of keys) {
          ArrayResponse.push({
            date: key,
            ...response[key]
          })
        }

        // "11/10/2022" : {
        //   in: ...
        //   out: ...
        // }

        console.log(ArrayResponse);
        

        

        return ArrayResponse

  }


  // update(id: number, updatePaymentTransactionDto: UpdatePaymentTransactionDto) {
  //   return this.PaymentTransactionRepository.update(id,updatePaymentTransactionDto)
  // }

  // async remove(id: string): Promise<void> {
  //   await this.PaymentTransactionRepository.delete(id);
  // }
}

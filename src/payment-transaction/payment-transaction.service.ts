import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { validateHeaderValue } from 'http';
import { Like, Repository, Between } from 'typeorm';

import { CreatePaymentTransactionDto , RequestTransactionDto} from './dto/create-payment-transaction.dto';
import { CreateStatementTransactionDto } from './dto/create-statement-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import{ PaymentTransaction } from './entities/payment-transaction.entity'
import {UserNotificationTransaction} from '../user-notification-transaction/entities/user-notification-transaction.entity'
import { CreateUserNotificationTransactionDto } from 'src/user-notification-transaction/dto/create-user-notification-transaction.dto';
import { UserNotificationTransactionService } from 'src/user-notification-transaction/user-notification-transaction.service';
import { HttpService, HttpModule } from '@nestjs/axios';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    @Inject()
    private PaymentTransactionRepository: Repository<PaymentTransaction>,
    private readonly httpService: HttpService
  ) {}

  async create(createPaymentTransactionDto: CreatePaymentTransactionDto) {
    console.log(createPaymentTransactionDto)
    const temp = await this.PaymentTransactionRepository.save(createPaymentTransactionDto) as PaymentTransaction;
    const data: CreateUserNotificationTransactionDto = {
      accountID: createPaymentTransactionDto.accountID,
      transactionID: temp.transactionID
    }
    console.log(data)
    const createNotofication = await this.httpService.axiosRef.post("http://localhost:3001/user-notification-transaction",data)

    const responseTransaction = {
      transactionID: temp.transactionID, 
      message: "OK"
    }
    
    return  responseTransaction
  }
  
  async createStatement(createStatementTransactionDto: CreateStatementTransactionDto){
    //  s => startDate
    //  e => endDate
    var date = createStatementTransactionDto.Date.split(',')
    const num = date.length
    if(num == 1){
      var dateTemp1 = date.pop()
      const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ("(d.created_at > :s1 and d.created_at < :e1)", 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")})
        .getMany()
        console.log("Return...")
      
      let response = {}
      let responseArray = []
      d.map((value,index)=>{
        if(value.userAccountNumber == createStatementTransactionDto.userAccountNumber){
            response = {
              datetime :  value.created_at,
              description : value.type,
              paymentAmount : value.amount,
              balance : value.amount,
            }
            responseArray.push(response)
          }
        })
      let Finalresponse = {"statement":responseArray,
                             "desEmail":createStatementTransactionDto.destEmail,
                             "name":createStatementTransactionDto.name,
                             "accountNumber":createStatementTransactionDto.userAccountNumber
                            }

      console.log(Finalresponse)
      return Finalresponse

    }
    else if(num == 2){
      var dateTemp1 = date.pop()
      var dateTemp2 = date.pop()
      const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ("(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)", 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
        ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")})
        .getMany();
        console.log("Return...")
        
        let response = {}
        let responseArray = []
        d.map((value,index)=>{
          if(value.userAccountNumber == createStatementTransactionDto.userAccountNumber){
              response = {
                datetime :  value.created_at,
                description : value.type,
                paymentAmount : value.amount,
                balance : value.amount,
              }
              responseArray.push(response)
            }
          })
        let Finalresponse = {"statement":responseArray,
                               "desEmail":createStatementTransactionDto.destEmail,
                               "name":createStatementTransactionDto.name,
                               "accountNumber":createStatementTransactionDto.userAccountNumber
                              }
  
        console.log(Finalresponse)
        return Finalresponse
  
        
    }

    else if(num == 3){
      var dateTemp1 = date.pop()
      var dateTemp2 = date.pop()
      var dateTemp3 = date.pop()
      const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
        ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
        ,s3: new Date(dateTemp2+",1"),e3: new Date(dateTemp3+",31")})
        .getMany();
        console.log("Return...")
        
        let response = {}
        let responseArray = []
        d.map((value,index)=>{
          if(value.userAccountNumber == createStatementTransactionDto.userAccountNumber){
              response = {
                datetime :  value.created_at,
                description : value.type,
                paymentAmount : value.amount,
                balance : value.amount,
              }
              responseArray.push(response)
            }
          })
        let Finalresponse = {"statement":responseArray,
                               "desEmail":createStatementTransactionDto.destEmail,
                               "name":createStatementTransactionDto.name,
                               "accountNumber":createStatementTransactionDto.userAccountNumber
                              }
  
        console.log(Finalresponse)
        return Finalresponse
  
    }

    else if(num == 4){
      var dateTemp1 = date.pop()
      var dateTemp2 = date.pop()
      var dateTemp3 = date.pop()
      var dateTemp4 = date.pop()
      const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)or (d.created_at > :s4 and d.created_at < :e4)', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
        ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
        ,s3: new Date(dateTemp3+",1"),e3: new Date(dateTemp3+",31")
        ,s4: new Date(dateTemp4+",1"),e4: new Date(dateTemp4+",31") })
        .getMany();
        console.log("Return...")

        let response = {}
        let responseArray = []
        d.map((value,index)=>{
          if(value.userAccountNumber == createStatementTransactionDto.userAccountNumber){
              response = {
                datetime :  value.created_at,
                description : value.type,
                paymentAmount : value.amount,
                balance : value.amount,
              }
              responseArray.push(response)
            }
          })
        let Finalresponse = {"statement":responseArray,
                               "desEmail":createStatementTransactionDto.destEmail,
                               "name":createStatementTransactionDto.name,
                               "accountNumber":createStatementTransactionDto.userAccountNumber
                              }
  
        console.log(Finalresponse)
        return Finalresponse
  
    }

    else if(num == 5){
      var dateTemp1 = date.pop()
      var dateTemp2 = date.pop()
      var dateTemp3 = date.pop()
      var dateTemp4 = date.pop()
      var dateTemp5 = date.pop()
      const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)or (d.created_at > :s4 and d.created_at < :e4 )or (d.created_at > :s5 or d.created_at < :e5 )', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
        ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
        ,s3: new Date(dateTemp3+",1"),e3: new Date(dateTemp3+",31")
        ,s4: new Date(dateTemp4+",1"),e4: new Date(dateTemp4+",31")
        ,s5: new Date(dateTemp5+",1"),e5: new Date(dateTemp5+",31") })
        .getMany();
        console.log("Return...")
        
        let response = {}
        let responseArray = []
        d.map((value,index)=>{
          if(value.userAccountNumber == createStatementTransactionDto.userAccountNumber){
              response = {
                datetime :  value.created_at,
                description : value.type,
                paymentAmount : value.amount,
                balance : value.amount,
              }
              responseArray.push(response)
            }
          })
        let Finalresponse = {"statement":responseArray,
                               "desEmail":createStatementTransactionDto.destEmail,
                               "name":createStatementTransactionDto.name,
                               "accountNumber":createStatementTransactionDto.userAccountNumber
                              }
  
        console.log(Finalresponse)
        return Finalresponse
  
    }

    else if(num == 6){
      var dateTemp1 = date.pop()
      var dateTemp2 = date.pop()
      var dateTemp3 = date.pop()
      var dateTemp4 = date.pop()
      var dateTemp5 = date.pop()
      var dateTemp6 = date.pop()
      const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ('(d.created_at > :s1 and d.created_at < :e1) or (d.created_at > :s2 and d.created_at < :e2)or (d.created_at > :s3 and d.created_at < :e3)or (d.created_at > :s4 and d.created_at < :e4 )or (d.created_at > :s5 and d.created_at < :e5 )or (d.created_at > :s6 and d.created_at < :s6 )', 
        {s1: new Date(dateTemp1+",1"),e1: new Date(dateTemp1+",31")
        ,s2: new Date(dateTemp2+",1"),e2: new Date(dateTemp2+",31")
        ,s3: new Date(dateTemp3+",1"),e3: new Date(dateTemp3+",31")
        ,s4: new Date(dateTemp4+",1"),e4: new Date(dateTemp4+",31")
        ,s5: new Date(dateTemp5+",1"),e5: new Date(dateTemp5+",31")
        ,s6: new Date(dateTemp6+",1"),e6: new Date(dateTemp6+",31")})
        .getMany();
        console.log("Return...")
        
        let response = {}
        let responseArray = []
        d.map((value,index)=>{
          if(value.userAccountNumber == createStatementTransactionDto.userAccountNumber){
              response = {
                datetime :  value.created_at,
                description : value.type,
                paymentAmount : value.amount,
                balance : value.amount,
              }
              responseArray.push(response)
            }
          })
        let Finalresponse = {"statement":responseArray,
                               "desEmail":createStatementTransactionDto.destEmail,
                               "name":createStatementTransactionDto.name,
                               "accountNumber":createStatementTransactionDto.userAccountNumber
                              }
  
        console.log(Finalresponse)
        return Finalresponse
  
    }
  }

  findAll(): Promise<PaymentTransaction[]> {
    return this.PaymentTransactionRepository.find();
  }  

  async findbyMonth(requestTransactionDto: RequestTransactionDto){
    const date = requestTransactionDto.date
    const d = await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ("(d.created_at > :s1 and d.created_at < :e1)", 
        {s1: new Date(date+",1"),e1: new Date(date+",31")})
        .getMany();
        console.log("Return...")
        
      let response = {}
      let responseArray = []
      d.map((value,index)=>{
        if(value.userAccountNumber == requestTransactionDto.userAccountNumber){
            response = {
              datetime :  value.created_at,
              description : value.type,
              paymentAmount : value.amount,
              balance : value.amount,
            }
            responseArray.push(response)
          }
        })
                    

      console.log(responseArray)
      return responseArray
   
  }
  
  async findSumOfDate(requestTransactionDto: RequestTransactionDto){
    var newCreatedAt = requestTransactionDto.date.split(',')
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
          if(value.userAccountNumber == requestTransactionDto.userAccountNumber){
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
        }
           console.log(date)
          console.log(value.created_at.getDate(), value.amount , value.type, value.fee)
        })
        //console.log(response)
        
        const ArrayResponse = []
        const keys = Object.keys(response)

        for (const key of keys) {
          ArrayResponse.push({
            date: key,
            ...response[key]
          })
        }

        //console.log(ArrayResponse);
        

        

        return ArrayResponse

  }

  async findSumOfMonth(requestTransactionDto: RequestTransactionDto){
    var newCreatedAt = requestTransactionDto.date.split(',')
    var dateTemp1 = newCreatedAt.pop()
    var dateTemp2 = newCreatedAt.pop()
    console.log(dateTemp1,dateTemp2)

    const d= await this.PaymentTransactionRepository
        .createQueryBuilder('d')
        .where
        ("(d.created_at > :e1 and d.created_at < :s1)", 
        {s1: new Date(dateTemp1+",31"),e1: new Date(dateTemp2+",1")})
        .getMany();
        console.log("Return...")
        let response = {}
        d.map((value,index)=>{
          const isIncome = value.type === PaymentTransaction.Payment_Type.RECEIVE || value.type === PaymentTransaction.Payment_Type.DEPOSIT
          const month = `${value.created_at.getMonth() + 1}/${value.created_at.getFullYear()}`
          console.log("month"+month)
          if(value.userAccountNumber == requestTransactionDto.userAccountNumber){
            if (response[month]) {
              if(isIncome){
                response[month].income += value.amount
                response[month].outcome += value.fee

              }
              else{
                response[month].outcome += value.amount+value.fee
              }

            } else {
              response[month] = {
                income : isIncome ? value.amount : 0,
                outcome : !isIncome ? value.amount+value.fee : 0
              }
            }
          }
          // console.log(date)
          console.log(value.created_at.getDate(), value.amount , value.type, value.fee)
        })

        const ArrayResponse = []
        const keys = Object.keys(response)

        for (const key of keys) {
          ArrayResponse.push({
            month: key,
            ...response[key]
          })
        }

        console.log(ArrayResponse);
        return ArrayResponse

  }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserNotificationTransactionDto } from './dto/create-user-notification-transaction.dto';
import { UpdateUserNotificationTransactionDto } from './dto/update-user-notification-transaction.dto';
import { UserNotificationTransaction } from './entities/user-notification-transaction.entity';

@Injectable()
export class UserNotificationTransactionService {
  constructor( 
    @InjectRepository(UserNotificationTransaction)
    private UserNotificationTransactionRepository: Repository<UserNotificationTransaction>
  ){}

  create(createUserNotificationTransactionDto: CreateUserNotificationTransactionDto) {
    return this.UserNotificationTransactionRepository.save(createUserNotificationTransactionDto)
  }

  findAll() {
    return this.UserNotificationTransactionRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} userNotificationTransaction`;
  // }

  // update(id: number, updateUserNotificationTransactionDto: UpdateUserNotificationTransactionDto) {
  //   return `This action updates a #${id} userNotificationTransaction`;
  // }
  

  async update(id: string, updateUserNotificationTransactionDto : UpdateUserNotificationTransactionDto) {
    const isReadToUpdate = await this.UserNotificationTransactionRepository.findOneBy ({
      notiID: id,
  })
    isReadToUpdate.isRead = true
    return this.UserNotificationTransactionRepository.save(isReadToUpdate)
  }

  // remove(id: number) {
  //   return `This action removes a #${id} userNotificationTransaction`;
  // }
}

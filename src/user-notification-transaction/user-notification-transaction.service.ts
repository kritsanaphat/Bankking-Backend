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

  async create(createUserNotificationTransactionDto: CreateUserNotificationTransactionDto) {
    const temp =  await this.UserNotificationTransactionRepository.save(createUserNotificationTransactionDto)
    const response = {
      notiID:temp.notiID,
      messege:"OK"
    }
    return response
  }

  findAll() {
    return this.UserNotificationTransactionRepository.find()
  }

  async findOne(accountID: string) {
    let response = {}
    console.log(accountID)
    const d = await this.UserNotificationTransactionRepository
      .createQueryBuilder('d')
      .where('d.accountID = :id', { id:accountID })
      .getMany()

      return d
  }

  async update(id: string, updateUserNotificationTransactionDto : UpdateUserNotificationTransactionDto) {
    const isReadToUpdate = await this.UserNotificationTransactionRepository.findOneBy ({
      notiID: id,
  })
    isReadToUpdate.isRead = true
    return this.UserNotificationTransactionRepository.save(isReadToUpdate)
  }
}

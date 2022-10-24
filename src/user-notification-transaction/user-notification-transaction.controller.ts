import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserNotificationTransactionService } from './user-notification-transaction.service';
import { CreateUserNotificationTransactionDto } from './dto/create-user-notification-transaction.dto';
import { UpdateUserNotificationTransactionDto } from './dto/update-user-notification-transaction.dto';

@Controller('user-notification-transaction')
export class UserNotificationTransactionController {
  constructor(private readonly userNotificationTransactionService: UserNotificationTransactionService) {}

  @Post()
  create(@Body() createUserNotificationTransactionDto: CreateUserNotificationTransactionDto) {
    return this.userNotificationTransactionService.create(createUserNotificationTransactionDto);
  }

  @Get()
  findAll() {
    return this.userNotificationTransactionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userNotificationTransactionService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('isRead') id: string, @Body() updateUserNotificationTransactionDto: UpdateUserNotificationTransactionDto) {
    return this.userNotificationTransactionService.update(id, updateUserNotificationTransactionDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userNotificationTransactionService.remove(+id);
  // }
}

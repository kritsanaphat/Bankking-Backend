import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityTransactionService } from './activity-transaction.service';
import { CreateActivityTransactionDto } from './dto/create-activity-transaction.dto';
import { UpdateActivityTransactionDto } from './dto/update-activity-transaction.dto';

@Controller('activity-transaction')
export class ActivityTransactionController {
  constructor(private readonly activityTransactionService: ActivityTransactionService) {}

  @Post()
  create(@Body() createActivityTransactionDto: CreateActivityTransactionDto) {
    return this.activityTransactionService.create(createActivityTransactionDto);
  }

  @Get()
  findAll() {
    return this.activityTransactionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.activityTransactionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateActivityTransactionDto: UpdateActivityTransactionDto) {
  //   return this.activityTransactionService.update(+id, updateActivityTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.activityTransactionService.remove(+id);
  // }
}

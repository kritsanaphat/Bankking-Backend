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
}

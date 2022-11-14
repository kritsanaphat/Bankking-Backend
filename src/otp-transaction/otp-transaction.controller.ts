import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtpTransactionService } from './otp-transaction.service';
import { CreateOtpTransactionDto } from './dto/create-otp-transaction.dto';
import { UpdateOtpTransactionDto } from './dto/update-otp-transaction.dto';

@Controller('otp-transaction')
export class OtpTransactionController {
  constructor(private readonly otpTransactionService: OtpTransactionService) {}

  @Post()
  create(@Body() createOtpTransactionDto: CreateOtpTransactionDto) {
    return this.otpTransactionService.create(createOtpTransactionDto);
  }

  @Get()
  findAll() {
    return this.otpTransactionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.otpTransactionService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('isFinishd') id: string, @Body() updateOtpTransactionDto: UpdateOtpTransactionDto) {
    return this.otpTransactionService.update(id, updateOtpTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otpTransactionService.remove(id);
  }
}

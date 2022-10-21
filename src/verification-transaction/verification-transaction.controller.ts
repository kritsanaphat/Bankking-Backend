import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VerificationTransactionService } from './verification-transaction.service';
import { CreateVerificationTransactionDto } from './dto/create-verification-transaction.dto';
import { UpdateVerificationTransactionDto } from './dto/update-verification-transaction.dto';

@Controller('verification-transaction')
export class VerificationTransactionController {
  constructor(private readonly verificationTransactionService: VerificationTransactionService) {}

  @Post()
  create(@Body() createVerificationTransactionDto: CreateVerificationTransactionDto) {
    return this.verificationTransactionService.create(createVerificationTransactionDto);
  }

  @Get()
  findAll() {
    return this.verificationTransactionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.verificationTransactionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVerificationTransactionDto: UpdateVerificationTransactionDto) {
  //   return this.verificationTransactionService.update(+id, updateVerificationTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.verificationTransactionService.remove(+id);
  // }
}

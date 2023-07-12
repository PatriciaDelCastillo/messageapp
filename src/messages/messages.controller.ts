import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto/create-message-dto';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll(): string {
    return 'This will show all messages';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} message`;
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto): any {
    return 'mensaje creado';
  }
  @Put(':id')
  updateMessage(@Body() updateMessageDto:  CreateMessageDto) {
    return `This action updates a  message`;
  }
  @Delete(':id')
  remove(@Param('id')id:string){
    return `This action removes a #${id} message`;
  }
}

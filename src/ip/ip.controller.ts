import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {IpService} from './ip.service';
import {CreateIpDto} from './dto/create-ip.dto';
import {CacheInterceptor} from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@Controller('ip')
export class IpController {
  constructor(private readonly ipSevice: IpService) {}

  @Get()
  async getAllIps() {
    return this.ipSevice.findAll();
  }

  @Get(':id')
  async getIp(@Param('id') id: string) {
    return this.ipSevice.findOne(+id);
  }

  @Post()
  async addIp(@Body() createItemDto: CreateIpDto) {
    return this.ipSevice.addIp(createItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ipSevice.remove(+id);
  }
}

import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {IpController} from './ip.controller';
import {IpService} from './ip.service';
import {Ip} from './entities/ip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ip])],
  controllers: [IpController],
  providers: [IpService],
})
export class IpModule {}

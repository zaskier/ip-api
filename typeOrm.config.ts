import {ConfigService} from '@nestjs/config';
import {config} from 'dotenv';
import {Ip} from 'src/ip/entities/ip.entity';
import {DataSource} from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  migrations: ['migrations/**'],
  entities: [Ip],
});

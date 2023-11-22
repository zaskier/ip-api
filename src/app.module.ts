import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {IpModule} from './ip/ip.module';
import {DatabaseModule} from './database/database.module';
import {CacheModule, CacheInterceptor} from '@nestjs/cache-manager';
import {APP_INTERCEPTOR} from '@nestjs/core';

@Module({
  imports: [
    IpModule,
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    CacheModule.register({isGlobal: true, ttl: 60}),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}

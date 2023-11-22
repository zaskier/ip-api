import {Test, TestingModule} from '@nestjs/testing';
import {IpService} from './ip.service';
import {CACHE_MANAGER} from '@nestjs/cache-manager';
import {Ip} from './entities/ip.entity';
import {IpRepository} from './models/ip.repository';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
  del: jest.fn(),
  reset: jest.fn(),
};

describe('AppService', () => {
  let ipService: IpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Ip])],
      controllers: [],
      providers: [
        IpService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    ipService = moduleRef.get<IpService>(IpService);
  });

  it('should be defined', () => {
    expect(ipService).toBeDefined();
  });
});

import {Inject, Injectable} from '@nestjs/common';
import {CreateIpDto} from './dto/create-ip.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Ip} from './entities/ip.entity';
import {Repository, EntityManager} from 'typeorm';
import {CACHE_MANAGER, CacheInterceptor} from '@nestjs/cache-manager';

import {Cache} from 'cache-manager';

@Injectable()
export class IpService {
  constructor(
    @InjectRepository(Ip)
    private readonly ipRepository: Repository<Ip>,
    private readonly entityManager: EntityManager,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  async findOne(id: number) {
    return this.ipRepository.findOne({
      where: {id},
    });
  }

  async findAll() {
    return this.ipRepository.find();
  }

  async addIp(createIpDto: CreateIpDto) {
    const res = await fetch(`https://ipwho.is/${createIpDto.ip}`, {
      method: 'GET',
    });
    const json = await res.json();

    if (json.error) {
      return json.error;
    }
    let createIp = new Ip();
    createIp.ip = json.ip;
    createIp.success = json.success;
    createIp.latitude = json.latitude;
    createIp.longitude = json.longitude;

    return await this.entityManager.save(createIp);
  }

  async remove(id: number) {
    await this.ipRepository.delete(id);
  }
}

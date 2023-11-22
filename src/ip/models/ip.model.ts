import {Entity} from 'typeorm';

@Entity('ip')
export class Ip {
  id: number;
  ip: string;
  success: boolean;
  latitude: string;
  longitude: string;
  createdAt?: Date;
  editedAt?: Date;
}

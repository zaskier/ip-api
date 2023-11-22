import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

@Entity('ip')
export class Ip extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({unique: true})
  @Column()
  ip: string;

  @Column({default: false})
  success: boolean;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;
}

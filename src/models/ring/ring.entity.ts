import { LOTR_RACES } from 'src/types/LoTR-Races';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Bearer } from '../bearer/bearer.entity';

@Entity('RING')
@Unique(['name'])
export class Ring {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NAME' })
  name: string;

  @Column({ name: 'POWER' })
  power: string;

  @Column({ name: 'FORGEDBY' })
  forgedBy: LOTR_RACES;

  @Column({ name: 'IMAGE' })
  image: string;

  @Column({ name: 'BEARER' })
  bearer: string;

  @OneToOne(() => Bearer, (bearer) => bearer.ring, { cascade: true })
  @JoinColumn({ name: 'RINGNAME', referencedColumnName: 'ring' })
  Bearer: Bearer;
}

import { LOTR_RACES } from 'src/types/LoTR-Races';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ring } from '../ring/ring.entity';

@Entity('BEARER')
export class Bearer {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;
  @Column({ name: 'NAME' })
  name: string;

  @Column({ name: 'RACE' })
  race: LOTR_RACES;

  @Column({ name: 'RING' })
  ring: string;

  @OneToOne(() => Ring, (ring) => ring.bearer, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'RING', referencedColumnName: 'name' })
  Ring: Ring;
}

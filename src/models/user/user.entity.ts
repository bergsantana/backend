import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('USER')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'NAME' })
  name: string;

  @Column({ name: 'PASSWORD' })
  password: string;
}

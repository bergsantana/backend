import { Module } from '@nestjs/common';
import { RingService } from './ring.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ring } from 'src/models/ring/ring.entity';
import { RingController } from './ring.controller';
import { Bearer } from 'src/models/bearer/bearer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ring, Bearer])],
  controllers: [RingController],
  providers: [RingService],
})
export class RingModule {}

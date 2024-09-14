import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ring } from 'src/models/ring/ring.entity';
import { LOTR_RACES } from 'src/types/LoTR-Races';
import { Bearer } from 'src/models/bearer/bearer.entity';

@Injectable()
export class RingService {
  constructor(
    @InjectRepository(Ring)
    private readonly ringRepository: Repository<Ring>,
    @InjectRepository(Bearer)
    private readonly bearerRepository: Repository<Bearer>
  ) {}

  async save(ring: Ring) {
    try {
      const maxRings = {
        Elves: 3,
        Dwarf: 7,
        Men: 1,
        Sauron: 1,
      };

      // Check bearer race and rules
      // if(ring.bearer && ring.bearers){
      //   const currentBearer = ring.bearers.find(bearer => bearer.name === ring.bearer)
      //   const bearers = this.bearerRepository.find({
      //     where: {race: currentBearer.race }
      //   })

      // }

      return await this.ringRepository.save(ring);
    } catch (error) {
      // return { errorMsg: 'This ring is already taken' };
      return { errorMsg: error };
    }
  }

  async findAll() {
    return await this.ringRepository.find();
  }

  async update(ring: Ring) {
    return await this.ringRepository.save({
      ...ring,
    });
  }

  async remove(id: number) {
    return await this.ringRepository.delete(id);
  }
}

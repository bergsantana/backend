import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register({
    email,
    name,
    password,
  }: {
    email: string;
    name: string;
    password: string;
  }) {
    try {
      const res = await this.userRepository.find({
        where: {
          email,
        },
      });
      if (res.length) {
        throw Error('E-mail already taken');
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await this.userRepository.create({
        name,
        email,
        password: hashedPassword,
      });
      await this.userRepository.save(user);

      console.log('sucessfully registered user', user);
    } catch (err) {
      console.log('[ERROR] - While registering user', err);
    }
  }
}

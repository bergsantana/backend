import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const res = await this.userRepository.find({
      where: {
        email,
      },
    });

    const resMsg = { msg: '', res: {} };
    if (!res.length) {
      resMsg.msg = 'Invalid credentials';
    } else if (res[0].password !== password) {
      resMsg.msg = 'Invalid password';
    }

    if (res[0].password == password) {
      res[0].password = '';
      resMsg.res = res[0];
    }

    console.log('what is happening ', res[0]);
    return this.jwtService.sign({ ...res[0] });
  }
}

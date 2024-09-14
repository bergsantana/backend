import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RingService } from './ring.service';
import { Ring } from 'src/models/ring/ring.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('ring')
export class RingController {
  constructor(private readonly ringService: RingService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() ring: Ring) {
    return this.ringService.save(ring);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.ringService.findAll();
  }

  @UseGuards(AuthGuard)
  @Put('/update ')
  update(@Body('name') ring: Ring) {
    return this.ringService.update(ring);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ringService.remove(id);
  }
}

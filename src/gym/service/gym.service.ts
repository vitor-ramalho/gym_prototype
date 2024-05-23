import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gym } from '../entities/gym.entity';
import { RegisterGymDto } from 'src/auth/dto/register-gym.dto';

@Injectable()
export class GymService {
  constructor(
    @InjectRepository(Gym)
    private gymsRepository: Repository<Gym>,
  ) {}

  async register(dto: RegisterGymDto): Promise<Gym> {
    return this.gymsRepository.save(dto);
  }

  async findById(id: number): Promise<Gym> {
    return this.gymsRepository.findOne({
      where: { id },
    });
  }
  // other methods...
}

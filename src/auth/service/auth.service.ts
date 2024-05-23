import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Gym } from 'src/gym/entities/gym.entity';
import { GymService } from 'src/gym/service/gym.service';
import { RegisterGymDto } from '../dto/register-gym.dto';

@Injectable()
export class AuthService {
  constructor(
    private gymService: GymService,
    private jwtService: JwtService,
  ) {}

  async registerGym(dto: RegisterGymDto): Promise<any> {
    const newGym = await this.gymService.register(dto);
    const payload = { id: newGym.id, name: newGym.name, email: newGym.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async generateToken(gym: any) {}
}

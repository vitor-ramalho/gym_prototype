import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Gym } from 'src/gym/entities/gym.entity';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() gym: Gym) {
    return this.authService.registerGym(gym);
  }
}

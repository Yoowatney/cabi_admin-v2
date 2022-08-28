import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/auth.guard';
// import { LentInfoDto } from './dto/lent-info.dto';
import { LentInfoResponseDto } from './dto/lent-info.response.dto';
import { LentService } from './lent.service';

@Controller('lent')
@UseGuards(JWTAuthGuard)
export class LentController {
  private logger = new Logger(LentController.name);

  constructor(private lentService: LentService) {}
  @Get('/')
  async getLentInfo(): Promise<LentInfoResponseDto> {
    this.logger.log('call getLentInfo()');
    return await this.lentService.getLentUserInfo();
  }

  @Get('/overdue')
  async getLentOverdueInfo(): Promise<void> {
    this.logger.log('call getLentOverdueInfo()');
  }
}

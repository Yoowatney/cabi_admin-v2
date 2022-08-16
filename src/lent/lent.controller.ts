import { Controller, Get, Logger } from '@nestjs/common';
// import { LentInfoDto } from './dto/lent-info.dto';
import { LentInfoResponseDto } from './dto/lent-info.response.dto';
import { LentService } from './lent.service';

@Controller('lent')
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

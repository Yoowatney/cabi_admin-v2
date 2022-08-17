import { Controller, Get, Logger } from '@nestjs/common';
import { CabinetService } from './cabinet.service';
import { CabinetFloorResponseDto } from './dto/cabinet-floor.response.dto';

@Controller('cabinet')
export class CabinetController {
  constructor(private cabinetService: CabinetService) {}

  private logger = new Logger(CabinetController.name);

  @Get('count/floor')
  async getCabinetCountFloor(): Promise<CabinetFloorResponseDto> {
    this.logger.warn('call getCabinetCountFloor()');
    return await this.cabinetService.getCabinetCountFloor();
  }
}

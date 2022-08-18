import {
  Controller,
  Get,
  Logger,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { CabinetDto } from './dto/cabinet.dto';
import { ReturnService } from './return.service';

@Controller('return')
export class ReturnController {
  private logger = new Logger(ReturnController.name);

  constructor(private returnService: ReturnService) {}

  @Get('/')
  async getReturn(
    @Query('cabinetIdx', ParseIntPipe) cabinetIdx: number,
  ): Promise<CabinetDto> {
    this.logger.log('call getReturn()');
    return await this.returnService.getReturn(cabinetIdx);
  }

  @Patch('/')
  async patchReturn(
    @Query('cabinetIdx', ParseIntPipe) cabinetIdx: number,
  ): Promise<string> {
    this.logger.log('call patchReturn()');
    await this.returnService.patchReturn(cabinetIdx);
    return 'ok';
  }
}

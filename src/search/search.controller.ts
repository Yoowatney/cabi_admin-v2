<<<<<<< HEAD
<<<<<<< HEAD
import { Controller, Get, Logger } from '@nestjs/common';
=======
import { Controller, Get, Logger, ParseIntPipe, Query } from '@nestjs/common';
=======
import {
  Controller,
  Get,
  Logger,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
>>>>>>> 4f16be5 (:recycle: fix: config database connection #9)
import { QueryDto } from './dto/search-query.dto';
import { SearchResponseDto } from './dto/search-response.dto';
import { SearchService } from './search.service';
>>>>>>> 28818b9 (:bug: fix: add class validator #9)

@Controller('search')
export class SearchController {
  private logger = new Logger(SearchController.name);

  @Get('/')
<<<<<<< HEAD
<<<<<<< HEAD
  async getSearch(): Promise<void> {
    this.logger.log('call getSearch()');
=======
=======
  @UsePipes(new ValidationPipe({ transform: true }))
>>>>>>> 4f16be5 (:recycle: fix: config database connection #9)
  async getSearch(@Query() queryDto: QueryDto): Promise<SearchResponseDto> {
    this.logger.log('call getSearch()');
    let resultFromLent;
    let resultFromLentLog;
    if (queryDto.intraId) {
      [resultFromLent, resultFromLentLog] = await Promise.all([
        this.searchService.getLentByIntraId(queryDto.intraId),
        this.searchService.getLentLogByIntraId(queryDto.intraId),
      ]);
    } else if (queryDto.cabinetNum && queryDto.floor) {
      [resultFromLent, resultFromLentLog] = await Promise.all([
        this.searchService.getLentByCabinetNum(
          queryDto.cabinetNum,
          queryDto.floor,
        ),
        this.searchService.getLentLogByCabinetNum(
          queryDto.cabinetNum,
          queryDto.floor,
        ),
      ]);
    }
    const result = { resultFromLent, resultFromLentLog };
    return result;
>>>>>>> 28818b9 (:bug: fix: add class validator #9)
  }
}
